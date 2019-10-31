const {
  describe,
  it
} = require('mocha')
const { expect } = require('chai')
const { SummonerApi } = require('../../../src/apis/lol/summoner/summoner')

describe('Summoner API', () => {
  it('Should return empty path when "by" is ID', () => {
    const api = new SummonerApi()
    const endpoint = {
      path: '/$(by)/'
    }
    const findById = ''
    const response = api.parsePath(endpoint, findById)
    expect(response).to.equal('/')
  })
})
