import { getChampionName, getChampionNameCapital } from '../../src//constants/champions'

describe('Champions Constant', () => {
  it('should return a empty champ', () => {
    const response = getChampionName(0)
    expect(response).toEqual('EMPTY_CHAMPION')
  })
  it('should return a champ', () => {
    const response = getChampionName(1)
    expect(typeof response).toEqual('string')
  })
  it('should return a champ capitalize', () => {
    const response = getChampionNameCapital(4)
    expect(response).toEqual('TwistedFate')
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
