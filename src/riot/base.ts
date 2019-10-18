import rp from 'request-promise'
import * as _ from 'lodash'
import { Regions } from '../constants/regions'
import { ApiKeyNotFound } from '../errors'
import { IEndpoint } from '../endpoints'
import { TOO_MANY_REQUESTS } from 'http-status-codes'
import { config } from 'dotenv'
import { ApiResponseDTO } from '../dto/ApiResponse/ApiResponse.dto'
import { RateLimitDto } from '../dto/RateLimit/RateLimit.dto'
import { GenericError } from '../errors/Generic.error'
import { RateLimitError } from '../errors/RateLimit.error'
import { IBaseApiParams, IParams, waiter } from './base.utils'

config()

export class BaseApi {
  private readonly baseUrl = 'https://$(region).api.riotgames.com/lol'
  private readonly retryInterval = .5
  private key: string
  private rateLimitRetry: boolean = true
  private rateLimitRetryAttempts: number = 1

  constructor ()
  constructor (params: IBaseApiParams)
  /**
   * Base api
   * @param key Riot games api key
   */
  constructor (key: string)
  constructor (param?: string | IBaseApiParams) {
    this.key = process.env.RIOT_API_KEY || ''
    if (typeof param === 'string') {
      this.key = param
    } else if (param) {
      if (typeof param.key === 'string') {
        this.key = param.key
      }
      this.setRateLimitsParams(param)
    }
  }

  private setRateLimitsParams (param: IBaseApiParams) {
    if (typeof param.rateLimitRetry !== 'undefined') {
      this.rateLimitRetry = param.rateLimitRetry
    }
    if (typeof param.rateLimitRetryAttempts !== 'undefined') {
      this.rateLimitRetryAttempts = param.rateLimitRetryAttempts
    }
  }

  private getRateLimits (headers: any): RateLimitDto {
    return {
      Type: _.get(headers, 'x-rate-limit-type', null),
      AppRateLimit: _.get(headers, 'x-app-rate-limit', null),
      AppRateLimitCount: _.get(headers, 'x-app-rate-limit-count', null),
      MethodRateLimit: _.get(headers, 'x-method-rate-limit'),
      MethodRatelimitCount: _.get(headers, 'x-method-rate-limit-count', null),
      RetryAfter: +_.get(headers, 'retry-after', 0),
      EdgeTraceId: _.get(headers, 'x-riot-edge-trace-id')
    }
  }

  private getApiUrl (endpoint: IEndpoint, params: IParams) {
    const {
      prefix,
      version,
      path
    } = endpoint
    const basePath = `${prefix}/v${version}/${path}`
    const re = /\$\(([^\)]+)?\)/g
    let base = `${this.baseUrl}/${basePath}`
    let match
    // tslint:disable:no-conditional-assignment
    while (match = re.exec(base)) {
      const [key] = match
      const value = String(params[match[1]])
      base = base.replace(key, value)
      re.lastIndex = 0
    }
    return base
  }

  private isRateLimitError (e: any) {
    if (!e) {
      return false
    }
    const {
      statusCode = e.status
    } = e || e.error
    return statusCode === TOO_MANY_REQUESTS
  }

  private getError (e: any) {
    const headers = this.getRateLimits(_.get(e, 'response.headers'))
    if (this.isRateLimitError(e)) {
      return new RateLimitError(headers)
    }
    // Otherwise generic error
    return new GenericError(headers, e)
  }

  private internalRequest<T> (options: rp.OptionsWithUri): Promise<T> {
    return (rp(options) as any)
  }

  private async retryRateLimit<T> (region: Regions, endpoint: IEndpoint, params?: IParams, e?: any): Promise<ApiResponseDTO<T>> {
    let baseError = this.getError(e)
    const isRateLimitError = this.isRateLimitError(e)
    if (!this.rateLimitRetry || !isRateLimitError || this.rateLimitRetryAttempts < 1) {
      throw baseError
    }
    const forceError = true
    for (let i = 0; i < this.rateLimitRetryAttempts; i++) {
      try {
        const response = await this.request<T>(region, endpoint, params, forceError)
        return response
      } catch (error) {
        const parseError = this.getError(error)
        // Isn't rate limit error
        if (!this.isRateLimitError(error)) {
          throw parseError
        }
        // Set a new attemp
        const {
          rateLimits: {
            RetryAfter
          }
        } = parseError
        const msToWait = ((RetryAfter || 0) + this.retryInterval) * 1000
        await waiter(msToWait)
      }
    }
    // Throw rate limit
    throw baseError
  }

  protected getParam (): IBaseApiParams {
    return {
      key: this.key,
      rateLimitRetry: this.rateLimitRetry,
      rateLimitRetryAttempts: this.rateLimitRetryAttempts
    }
  }

  protected async request<T> (region: Regions, endpoint: IEndpoint, params?: IParams, forceError?: boolean): Promise<ApiResponseDTO<T>> {
    if (!this.key) {
      throw new ApiKeyNotFound()
    }
    // Url params
    params = params || {}
    params.region = region.toLowerCase()
    // Format
    const uri = this.getApiUrl(endpoint, params)
    const options: rp.OptionsWithUri = {
      uri,
      method: 'GET',
      headers: {
        Origin: null,
        'X-Riot-Token': this.key
      },
      resolveWithFullResponse: true,
      json: true
    }
    try {
      const apiResponse = await this.internalRequest<any>(options)
      const { body, headers } = apiResponse
      return {
        rateLimits: this.getRateLimits(headers),
        response: body
      }
    } catch (e) {
      if (forceError) {
        throw e
      }
      return await this.retryRateLimit<T>(region, endpoint, params, e)
    }
  }
}
