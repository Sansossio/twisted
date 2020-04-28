import { ChampionApi } from '../../../src/apis/lol/champion/champion'
import { Regions } from '../../../src/constants'

describe('Champions API', () => {
  describe('Champions Score', () => {
    const request = jest.fn()
    const testId = 'id'
    const testRegion = Regions.AMERICA_NORTH

    beforeEach(() => {
      (ChampionApi.prototype as any).request = request
    })

    afterEach(() => {
      request.mockClear()
    })

    it('Should return a valid score', async () => {
      const score = 400
      request.mockImplementation(() => ({ response: score }))
      const api = new ChampionApi()
      const response = await api.championsScore(testId, testRegion)
      expect(response.score).toEqual(score)
    })

    it('Should return score 0 when response is not a number', async () => {
      request.mockImplementation(() => ({ response: null }))
      const api = new ChampionApi()
      const response = await api.championsScore(testId, testRegion)
      expect(response.score).toEqual(0)
    })
  })
})
