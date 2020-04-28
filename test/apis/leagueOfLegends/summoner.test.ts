import { SummonerApi } from '../../../src/apis/lol/summoner/summoner'

describe('Summoner API', () => {
  it('Should return empty path when "by" is ID', () => {
    const api = new SummonerApi()
    const endpoint = {
      path: '/$(by)/'
    }
    const findById = ''
    const response = (api as any).parsePath(endpoint, findById)
    expect(response).toEqual('/')
  })
})
