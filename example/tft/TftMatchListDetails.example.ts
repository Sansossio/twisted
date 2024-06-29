import { RiotApi } from '../../src'
import { TftApi } from '../../src'
import { configTft } from '../config/config'

const rApi = new RiotApi()
const api = new TftApi()

export async function matchListDetailsTft () {
  const { response: { puuid } } = await rApi.Account.getByRiotId(configTft.summonerName, configTft.region, configTft.regionGroup)
  return api.Match.listWithDetails(puuid, configTft.tftRegion)
}
