import { IEndpoint } from '../endpoints/endpoints'
import { OptionsWithUri } from 'request'
import { getUrlFromOptions } from './base.utils'

export class Logger {
  // Private methods
  private static parseName (endpoint: IEndpoint) {
    return `${endpoint.prefix}/${endpoint.path}`
  }
  // Public methods
  static start (endpoint: IEndpoint) {
    const name = Logger.parseName(endpoint)
    console.time(name)
  }

  static end (endpoint: IEndpoint) {
    const name = Logger.parseName(endpoint)
    console.timeEnd(name)
  }

  static uri (options: OptionsWithUri, endpoint: IEndpoint) {
    const uri = getUrlFromOptions(options)
    console.log(`Calling method url: ${uri} (${endpoint.path})`)
  }

  static rateLimit (endpoint: IEndpoint, ms: number) {
    const name = Logger.parseName(endpoint)
    console.log(`Waiting ${(ms / 1000).toFixed(2)} seconds by rate limit (${name})`)
  }
}
