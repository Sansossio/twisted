import { RiotApi } from '../../src'
import { TftApi } from '../../src'
import { configTft } from '../config/config'

const rApi = new RiotApi()
const api = new TftApi()

export async function TftLeagueBySummoner () {
  const { response: { puuid } } = await rApi.Account.getByRiotId(configTft.summonerName, configTft.region, configTft.regionGroup)
  const { response: { id } } = await api.Summoner.getByPUUID(puuid, configTft.region)
  const league = await api.League.get(id, configTft.region)
}
