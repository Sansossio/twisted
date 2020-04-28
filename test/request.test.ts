import { RequestBase } from '../src/base/request.base'

describe('Request', () => {
  const sendRequest = jest.fn()
  const options: any = {}

  beforeEach(() => {
    (RequestBase as any).sendRequest = sendRequest
  })

  describe('Queue', () => {
    beforeEach(() => {
      sendRequest.mockClear()
    })

    it('Simple response', async () => {
      sendRequest.mockImplementation(() => Promise.resolve(true))
      const result = await RequestBase.request(options)
      expect(result).toEqual(true)
    })

    it('Multiple response', async () => {
      sendRequest
        .mockImplementationOnce(() => Promise.resolve(true))
        .mockImplementationOnce(() => Promise.resolve(false))
      const a = await RequestBase.request(options)
      const b = await RequestBase.request(options)
      expect(a).toEqual(true)
      expect(b).toEqual(false)
    })

    it('Multiple concurrentfully response', async () => {
      sendRequest
        .mockImplementationOnce(() => Promise.resolve(true))
        .mockImplementationOnce(() => Promise.resolve(false))
      const result = await Promise.all([RequestBase.request(options), RequestBase.request(options)])
      expect(result).toEqual([true, false])
    })

    it('Multiple response setting concurrency (1)', async () => {
      RequestBase.setConcurrency(1)
      sendRequest
        .mockImplementation(() => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        })
      const result = await Promise.all([RequestBase.request(options), RequestBase.request(options)])
      expect(result).toEqual([true, true])
    })

    it('Multiple response setting concurrency (2)', async () => {
      RequestBase.setConcurrency(2)
      sendRequest
        .mockImplementation(() => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        })
      const result = await Promise.all([
        RequestBase.request(options),
        RequestBase.request(options)
      ])
      expect(result).toEqual([true, true])
    })

    it('Multiple response setting concurrency (3)', async () => {
      RequestBase.setConcurrency(3)
      sendRequest
        .mockImplementation(() => {
          return new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        })
      const result = await Promise.all([
        RequestBase.request(options),
        RequestBase.request(options),
        RequestBase.request(options)
      ])
      expect(result).toEqual([true, true, true])
    })
  })
})
