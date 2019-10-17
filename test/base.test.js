const { describe, it } = require('mocha')
const { expect } = require('chai')
const { RiotApi } = require('../src')
const { ApiKeyNotFound } = require('../src/errors')

describe('Base api', () => {
  const riot = new RiotApi(null)
  const baseEndpoint = {
    path: '',
    version: 0,
    prefix: ''
  }
  const region = 'LA1'
  it('should throw when missing Riot api key', async () => {
    try {
      await riot.leagueOfLegends.champion.rotation(region)
    } catch (e) {
      expect(e).instanceOf(ApiKeyNotFound)
    }
  })
  it('base api should have a region variable', () => {
    expect(riot.baseUrl).to.include('$(region)')
  })
  it('should return correct api url', () => {
    const params = {
      region: region
    }
    const path = 'ryze'
    baseEndpoint.path = path
    const url = riot.getApiUrl(baseEndpoint, params)
    expect(url.endsWith(path)).to.be.equal(true)
  })
  it('should return correct api url with api params', () => {
    const params = {
      region: region,
      division: 'wood'
    }
    baseEndpoint.path = 'ryze/$(division)'
    const ends = 'ryze/wood'
    const url = riot.getApiUrl(baseEndpoint, params)
    expect(url.endsWith(ends)).to.be.equal(true)
  })
})
