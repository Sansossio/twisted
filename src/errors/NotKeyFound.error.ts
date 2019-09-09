import * as HttpCodes from 'http-status-codes'
import { IErrors } from './'

const message = 'Api key not found'

/**
 * Not key found class
 */
export class NotKeyFound extends Error implements IErrors {
  readonly status = HttpCodes.NOT_IMPLEMENTED
  readonly message = message

  // This isn't a useless constructor because this error doesn't need a message parameter
  constructor () {
    super()
  }
}
