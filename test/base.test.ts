import { expect } from 'chai'
import { RiotApi } from '../src'
import { ApiKeyNotFound } from '../src/errors'
import { Regions } from '../src/enum'
import { IEndpoint } from '../src/enum/endpoints'

describe('Base api', () => {
  const riot = new RiotApi()
  const baseEndpoint: IEndpoint = {
    path: '',
    version: 0,
    prefix: ''
  }
  it('should throw when missing Riot api key', async () => {
    try {
      await riot.getChampionRotation(Regions.LAT_NORTH)
    } catch (e) {
      expect(e).instanceOf(ApiKeyNotFound)
    }
  })
  it('base api should have a region variable', () => {
    expect(riot.baseUrl).to.include('$(region)')
  })
  it('should return correct api url', () => {
    const params = {
      region: Regions.LAT_NORTH
    }
    const path = 'ryze'
    baseEndpoint.path = path
    const url = riot.getApiUrl(baseEndpoint, params)
    expect(url.endsWith(path)).to.be.equal(true)
  })
  it('should return correct api url with api params', () => {
    const params = {
      region: Regions.LAT_NORTH,
      division: 'wood'
    }
    baseEndpoint.path = 'ryze/$(division)'
    const ends = 'ryze/wood'
    const url = riot.getApiUrl(baseEndpoint, params)
    expect(url.endsWith(ends)).to.be.equal(true)
  })
})
