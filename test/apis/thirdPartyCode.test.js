const { describe, it } = require('mocha')
const { expect } = require('chai')
const { stub, restore } = require('sinon')
const httpStatusCode = require('http-status-codes')
const { ThirdPartyCode } = require('../../src/riot/thirdPartyCode/thirdPartyCode')

describe('Third Party code', () => {
  it('should return valid code', async () => {
    const code = 'ORIGENGG'
    stub(ThirdPartyCode.prototype, 'request').callsFake(() => ({ data: code }))
    const api = new ThirdPartyCode()
    const response = await api.get()
    expect(response.data.code).eq(code)
    restore()
  })
  it('should return null when an error is 500', async () => {
    // Mock error 500
    stub(ThirdPartyCode.prototype, 'request').callsFake(() => {
      const error = new Error()
      error.statusCode = httpStatusCode.INTERNAL_SERVER_ERROR
      throw error
    })
    const api = new ThirdPartyCode()
    const response = await api.get()
    expect(response.data.code).eq(null)
    restore()
  })
  it('should return null when an error is 404', async () => {
    // Mock error 404
    stub(ThirdPartyCode.prototype, 'request').callsFake(() => {
      const error = new Error()
      error.statusCode = httpStatusCode.NOT_FOUND
      throw error
    })
    const api = new ThirdPartyCode()
    const response = await api.get()
    expect(response.data.code).eq(null)
    restore()
  })
})
