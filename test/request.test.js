const {
  describe,
  it
} = require('mocha')
const { expect } = require('chai')
const { restore, stub } = require('sinon')
const { RequestBase } = require('../src/base/request.base')

describe('Request', () => {
  describe('Queue', () => {
    it('Simple response', async () => {
      stub(RequestBase, 'sendRequest').callsFake(() => Promise.resolve(true))
      const result = await RequestBase.request()
      expect(result).to.equal(true)
      restore()
    })
    it('Multiple response', async () => {
      stub(RequestBase, 'sendRequest')
        .onFirstCall().returns(Promise.resolve(true))
        .onSecondCall().returns(Promise.resolve(false))
      const a = await RequestBase.request()
      const b = await RequestBase.request()
      expect(a).to.equal(true)
      expect(b).to.equal(false)
      restore()
    })
    it('Multiple concurrentfully response', async () => {
      stub(RequestBase, 'sendRequest')
        .onFirstCall().returns(Promise.resolve(true))
        .onSecondCall().returns(Promise.resolve(false))
      const result = await Promise.all([RequestBase.request(), RequestBase.request()])
      expect(result).to.deep.eq([true, false])
      restore()
    })
    it('Multiple response setting concurrency (1)', async () => {
      RequestBase.setConcurrency(1)
      stub(RequestBase, 'sendRequest')
        .callsFake(() => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        })
      const result = await Promise.all([RequestBase.request(), RequestBase.request()])
      expect(result).to.deep.eq([true, true])
      restore()
    }).timeout(2500)
    it('Multiple response setting concurrency (2)', async () => {
      RequestBase.setConcurrency(2)
      stub(RequestBase, 'sendRequest')
        .callsFake(() => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        })
      const result = await Promise.all([
        RequestBase.request(),
        RequestBase.request()
      ])
      expect(result).to.deep.eq([true, true])
      restore()
    }).timeout(2500)
    it('Multiple response setting concurrency (3)', async () => {
      RequestBase.setConcurrency(3)
      stub(RequestBase, 'sendRequest')
        .callsFake(() => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        })
      const result = await Promise.all([
        RequestBase.request(),
        RequestBase.request(),
        RequestBase.request()
      ])
      expect(result).to.deep.eq([true, true, true])
      restore()
    }).timeout(3500)
  })
})
