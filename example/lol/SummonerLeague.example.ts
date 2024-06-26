import { RiotApi } from '../../src'
import { LolApi } from '../../src'
import { config } from '../config/config'

const rApi = new RiotApi()
const api = new LolApi()

export async function summonerLeagueExample () {
  const { response: { puuid } } = await rApi.Account.getByRiotId(config.summonerName, config.tagLine, config.regionGroup)
  const { response: { id }} = await api.Summoner.getByPUUID(puuid, config.region)
  return await api.League.bySummoner(id, config.region)
}
