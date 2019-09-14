import rp from 'request-promise'
import { Regions } from '../enum/regions'
import { ApiKeyNotFound } from '../errors'
import { IEndpoint } from '../enum/endpoints'
import { config } from 'dotenv'

config()

interface IParams {
  [key: string]: string | number
}

export class BaseApi {
  readonly baseUrl = 'https://$(region).api.riotgames.com/lol'

  constructor (
    private readonly key?: string
  ) {
    if (!this.key) {
      this.key = process.env.RIOT_API_KEY
    }
  }

  protected getKey () {
    return this.key
  }

  protected async request<T> (region: Regions, endpoint: IEndpoint, params?: IParams): Promise<T> {
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
      json: true
    }
    return rp(options)
  }

  getApiUrl (endpoint: IEndpoint, params: IParams) {
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
}
