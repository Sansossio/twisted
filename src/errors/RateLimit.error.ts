import * as _ from 'lodash'
import { IErrors } from '.'
import { RateLimitDto } from '../dto/RateLimit/RateLimit.dto'
import { StatusCodeError } from 'request-promise/errors'

const message = 'Rate limit error'

/**
 * Rate limit error
 */
export class RateLimitError extends Error implements IErrors {
  readonly status: number
  readonly rateLimits: RateLimitDto

  constructor (rateLimits: RateLimitDto, error: StatusCodeError) {
    super(message)
    this.status = error.statusCode
    this.rateLimits = rateLimits
    Object.setPrototypeOf(this, RateLimitError.prototype)
  }
}
