const { BaseApi } = require('../src/base/base')
const { getUrlFromOptions } = require('../src/base/base.utils')
const { ApiKeyNotFound, RateLimitError, ServiceUnavailable } = require('../src/errors')

describe('Base api', () => {
  const riot = new BaseApi({ key: '' })
  const baseEndpoint = {
    path: '',
    version: 0,
    prefix: ''
  }
  const region = 'LA1'
  const key = 'apikey'

  describe('Arguments', () => {
    it('should throw when missing Riot api key', async () => {
      try {
        await riot.request(region)
      } catch (e) {
        expect(e).toBeInstanceOf(ApiKeyNotFound)
      }
    })

    it('should return correct key when param is an string', () => {
      const api = new BaseApi(key)
      expect(api.key).toEqual(key)
    })

    it('should return correct key when param is an object', () => {
      const api = new BaseApi({ key })
      expect(api.key).toEqual(key)
    })

    it('should return correct retry limit value', () => {
      const api = new BaseApi({ rateLimitRetry: false })
      expect(api.rateLimitRetry).toEqual(false)
    })

    it('should return correct retry limit attempts value', () => {
      const api = new BaseApi({ rateLimitRetryAttempts: 2 })
      expect(api.rateLimitRetryAttempts).toEqual(2)
    })

    it('should return valid default param', () => {
      const api = new BaseApi(key)
      const exp = {
        concurrency: undefined,
        key,
        rateLimitRetry: true,
        rateLimitRetryAttempts: 1,
        debug: {
          logRatelimits: false,
          logTime: false,
          logUrls: false
        }
      }
      expect(api.getParam()).toEqual(exp)
    })
  })

  describe('Utils', () => {
    it('base api should have a region variable', () => {
      expect(riot.baseUrl.indexOf('$(region)')).toBeGreaterThan(-1)
    })

    it('should return correct api url', () => {
      const params = {
        region: region
      }
      const path = 'ryze'
      baseEndpoint.path = path
      const url = riot.getApiUrl(baseEndpoint, params)
      expect(url.endsWith(path)).toEqual(true)
    })

    it('should return correct api url with api params', () => {
      const params = {
        region: region,
        division: 'wood'
      }
      baseEndpoint.path = 'ryze/$(division)'
      const ends = 'ryze/wood'
      const url = riot.getApiUrl(baseEndpoint, params)
      expect(url.endsWith(ends)).toEqual(true)
    })

    it('should return correct url with query params', () => {
      const baseUrl = 'https://na.api.riotgames.com/lol/match/v4/matchlists/by-account/xxx'
      const options = {
        url: baseUrl,
        params: { queue: [420, 430], beginIndex: 0, endIndex: 10 }
      }
      const url = getUrlFromOptions(options)
      const exp = `${baseUrl}?queue=420&queue=430&beginIndex=0&endIndex=10`
      expect(url).toEqual(exp)
    })
  })

  describe('Service unavailable response', () => {
    it('should return valid response at 2th attempt', async () => {
      const data = { data: 'good' }
      const api: any = new BaseApi(key)
      api.internalRequest = jest.fn()
        .mockImplementationOnce(() => data)
        .mockImplementationOnce(() => {
          throw new ServiceUnavailable()
        })
      const response = await api.request('KR', {})
      expect(response.response).toEqual(data.data)
    })

    it('should throw service unavailable error at 3th attempt', async () => {
      const api = new BaseApi(key)
      api.internalRequest = jest.fn()
        .mockImplementation(() => {
          throw new ServiceUnavailable()
        })
      try {
        await api.request('KR', {})
        throw new Error()
      } catch (e) {
        expect(e).toBeInstanceOf(ServiceUnavailable)
      }
    })
  })

  describe('Rate limit response', () => {
    it('should return valid response at 2th attempt', async () => {
      const data = { data: 'good' }
      const api = new BaseApi(key)
      api.internalRequest = jest.fn()
        .mockImplementationOnce(() => data)
        .mockImplementationOnce(() => {
          throw new RateLimitError()
        })
      const response = await api.request('KR', {})
      expect(response.response).toEqual(data.data)
    })

    it('should throw rate limit error at 3th attempt', async () => {
      const api = new BaseApi(key)
      api.internalRequest = jest.fn()
        .mockImplementation(() => {
          throw new RateLimitError()
        })
      try {
        await api.request('KR', {})
      } catch (e) {
        expect(e).toBeInstanceOf(RateLimitError)
      }
    })

    it('should throw rate limit when option ins disable', async () => {
      const api = new BaseApi({
        key,
        rateLimitRetry: false,
        rateLimitRetryAttempts: 1
      })
      api.internalRequest = jest.fn()
        .mockImplementationOnce(() => {
          throw new RateLimitError()
        })
      try {
        await api.request('KR', {})
      } catch (e) {
        expect(e).toBeInstanceOf(RateLimitError)
      }
    })

    it('should throw rate limit when retry limit retry attempts is lower than 1', async () => {
      const api = new BaseApi({
        key,
        rateLimitRetry: true,
        rateLimitRetryAttempts: 0
      })
      api.internalRequest = jest.fn()
        .mockImplementationOnce(() => {
          throw new RateLimitError()
        })
      try {
        await api.request('KR', {})
      } catch (e) {
        expect(e).toBeInstanceOf(RateLimitError)
      }
    })
  })
})
