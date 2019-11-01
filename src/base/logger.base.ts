import { IEndpoint } from '../endpoints/endpoints'

const TimeLogger = require('time-logger')

export class Logger {
  // Private methods
  private static parseName (endpoint: IEndpoint) {
    return `${endpoint.prefix}/${endpoint.path}`
  }
  // Public methods
  static start (endpoint: IEndpoint) {
    const name = Logger.parseName(endpoint)
    TimeLogger.begin(name)
  }

  static end (endpoint: IEndpoint) {
    const name = Logger.parseName(endpoint)
    TimeLogger.end(name)
    TimeLogger.dump(name)
  }
}
