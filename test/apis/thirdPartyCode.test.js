const { describe, it } = require('mocha')
const { expect } = require('chai')
const { stub, restore } = require('sinon')
const { ThirdPartyCode } = require('../../src/riot/thirdPartyCode/thirdPartyCode')

describe('Third Party code', () => {
  it('should return valid code', async () => {
    stub(ThirdPartyCode.prototype, 'request').callsFake(() => code)
    const api = new ThirdPartyCode()
    const code = 'ORIGENGG'
    const response = await api.get()
    expect(response.code).eq(code)
    restore()
  })
  it('should return null when riot response error', async () => {
    stub(ThirdPartyCode.prototype, 'request').throws()
    const api = new ThirdPartyCode()
    const response = await api.get()
    expect(response.code).eq(null)
    restore()
  })
})
