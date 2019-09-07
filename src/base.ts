import rp from 'request-promise'
import { Regions } from './enum/regions'

interface IParams {
  [key: string]: string | number
}

export class BaseApi {
  private readonly apiUrl = 'https://$(region).api.riotgames.com/lol'

  constructor (
    private readonly key: string
  ) {}

  private urlParams (path: string, params: IParams) {
    const re = /\$\(([^\)]+)?\)/g
    let base = `${this.apiUrl}/${path}`
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

  protected async request<T> (region: Regions, path: string, params?: IParams): Promise<T> {
    // Url params
    params = params || {}
    params.region = region.toLowerCase()
    // Format
    const uri = this.urlParams(path, params)
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
}
