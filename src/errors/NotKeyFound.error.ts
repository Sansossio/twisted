import * as HttpCodes from 'http-status-codes'
import { IErrors } from './'

const message = 'Api key not found'

export class NotKeyFound extends Error implements IErrors {
  readonly status = HttpCodes.NOT_IMPLEMENTED
  readonly message = message

  constructor () {
    super()
  }
}
