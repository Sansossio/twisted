import rp from 'request-promise'
import * as _ from 'lodash'
import { Regions } from '../enum/regions.enum'
import { ApiKeyNotFound } from '../errors'
import { IEndpoint } from '../enum/endpoints.enum'
import { config } from 'dotenv'
import { ApiResponseDTO } from '../dto/ApiResponse/ApiResponse.dto'
import { RateLimitDto } from '../dto/RateLimit/RateLimit.dto'
import { GenericError } from '../errors/Generic.error'

config()

interface IParams {
  [key: string]: string | number
}

export class BaseApi {
  private readonly baseUrl = 'https://$(region).api.riotgames.com/lol'

  constructor (
    private readonly key?: string | null
  ) {
    if (!this.key && this.key !== null) {
      this.key = process.env.RIOT_API_KEY
    }
  }

  private getRateLimits (headers: any): RateLimitDto {
    return {
      Type: _.get(headers, 'x-rate-limit-type', null),
      AppRateLimit: _.get(headers, 'x-app-rate-limit', null),
      AppRateLimitCount: _.get(headers, 'x-app-rate-limit-count', null),
      MethodRateLimit: _.get(headers, 'x-method-rate-limit'),
      MethodRatelimitCount: _.get(headers, 'x-method-rate-limit-count', null),
      RetryAfter: _.get(headers, 'retry-after'),
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

  protected getKey () {
    return this.key
  }

  protected async request<T> (region: Regions, endpoint: IEndpoint, params?: IParams): Promise<ApiResponseDTO<T>> {
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
      const { body, headers } = await (rp(options) as any)
      return {
        rateLimits: this.getRateLimits(headers),
        response: body
      }
    } catch (e) {
      const headers = this.getRateLimits(e.response.headers)
      const error = new GenericError(headers, e)
      throw error
    }
  }
}
