import * as _ from 'lodash'
import { IErrors } from '.'
import { RateLimitDto } from '../dto/RateLimit/RateLimit.dto'
import { StatusCodeError } from 'request-promise/errors'

const message = 'Generic error'

/**
 * Not api key found
 */
export class GenericError extends Error implements IErrors {
  readonly status: number
  readonly error: Error
  readonly rateLimits: RateLimitDto
  readonly body?: any
  readonly name = 'GenericError'

  constructor (rateLimits: RateLimitDto, error: StatusCodeError) {
    super(error.message || message)
    this.status = error.statusCode
    this.body = _.get(error, 'response.body', null)
    this.rateLimits = rateLimits
    this.error = error
    Object.setPrototypeOf(this, GenericError.prototype)
  }
}
