const {
  describe,
  it
} = require('mocha')
const { expect } = require('chai')
const { getChampionName, getChampionNameCapital } = require('../../src//constants/champions')

describe('Champions Constant', () => {
  it('should return a empty champ', () => {
    const response = getChampionName(0)
    expect(response).to.eq('EMPTY_CHAMPION')
  })
  it('should return a champ', () => {
    const response = getChampionName(1)
    expect(typeof response).to.eq('string')
  })
  it('should return a champ capitalize', () => {
    const response = getChampionNameCapital(4)
    expect(response).to.eq('TwistedFate')
  })
  it('should return error unknow champion', (done) => {
    try {
      const response = getChampionName(-1)
      done(new Error(`Unexpected response: ${response}`))
    } catch (e) {
      if (e instanceof Error) {
        done()
        return
      }
      done(new Error(`Unexpected error type: ${typeof e}`))
    }
  })
})
