const {
  describe,
  it,
  afterEach
} = require('mocha')
const { expect } = require('chai')
const { restore, stub } = require('sinon')
const { ChampionApi } = require('../../../src/apis/lol/champion/champion')

describe('Champions API', () => {
  describe('Champions Score', () => {
    afterEach(restore)
    it('Should return a valid score', async () => {
      const score = 400
      stub(ChampionApi.prototype, 'request').callsFake(() => ({ response: score }))
      const api = new ChampionApi()
      const response = await api.championsScore()
      expect(response.score).to.equal(score)
    })
    it('Should return score 0 when response is not a number', async () => {
      stub(ChampionApi.prototype, 'request').callsFake(() => ({ response: null }))
      const api = new ChampionApi()
      const response = await api.championsScore()
      expect(response.score).to.equal(0)
    })
  })
})
