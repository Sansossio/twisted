import { RiotApi } from '../../src'
import { TftApi } from '../../src'
import { configTft } from '../config/config'

const rApi = new RiotApi()
const api = new TftApi()

export async function matchDetailsTft () {
  const { response: { puuid } } = await rApi.Account.getByRiotId(configTft.summonerName, configTft.region, configTft.regionGroup)
  const { response: [matchId] } = await api.Match.list(puuid, configTft.tftRegion)
  console.log(matchId)
  return api.Match.get(matchId, configTft.tftRegion)
}
