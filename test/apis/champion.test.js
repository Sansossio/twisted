const {
  describe,
  it
} = require('mocha')
const { expect } = require('chai')
const { restore, stub } = require('sinon')
const { ChampionApi } = require('../../src/riot/champion/champion')

describe('Champions API', () => {
  describe('Champions Score', () => {
    it('Should return a valid score', async () => {
      const score = 400
      stub(ChampionApi.prototype, 'request').callsFake(() => ({ data: score }))
      const api = new ChampionApi()
      const response = await api.championsScore()
      expect(response.score).to.equal(score)
      restore()
    })
    it('Should return score 0 when response is not a number', async () => {
      stub(ChampionApi.prototype, 'request').callsFake(() => ({ data: null }))
      const api = new ChampionApi()
      const response = await api.championsScore()
      expect(response.score).to.equal(0)
      restore()
    })
  })
})
