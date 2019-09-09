import { expect } from 'chai'
import { RiotApi } from '../src'
import { ApiKeyNotFound } from '../src/errors'
import { Regions } from '../src/enum'

describe('Validations', () => {
  it('should throw when missing Riot api key', async () => {
    const riot = new RiotApi()
    try {
      await riot.getChampionRotation(Regions.LAT_NORTH)
    } catch (e) {
      expect(e).instanceOf(ApiKeyNotFound)
    }
  })
})
