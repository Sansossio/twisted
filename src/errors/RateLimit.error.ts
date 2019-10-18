import * as _ from 'lodash'
import { IErrors } from '.'
import { TOO_MANY_REQUESTS } from 'http-status-codes'
import { RateLimitDto } from '../dto/RateLimit/RateLimit.dto'
import { StatusCodeError } from 'request-promise/errors'

const message = 'Rate limit error'

/**
 * Rate limit error
 */
export class RateLimitError extends Error implements IErrors {
  readonly status: number = TOO_MANY_REQUESTS
  readonly rateLimits: RateLimitDto

  constructor (rateLimits: RateLimitDto) {
    super(message)
    this.rateLimits = rateLimits
    Object.setPrototypeOf(this, RateLimitError.prototype)
  }
}
