import { RiotApi } from '../../src'
import { LolApi } from '../../src'
import { config } from '../config/config'

const rApi = new RiotApi()
const api = new LolApi()

export async function leagueExample () {
  const { response: { puuid } } = await rApi.Account.getByRiotId(config.summonerName, config.tagLine, config.regionGroup)
  const { response: { id }} = await api.Summoner.getByPUUID(puuid, config.region)
  // For below, response does not guarantee order for { response: [league]} destructuring
  const league = (await api.League.bySummoner(id, config.region)).response.find(o => o.leagueId)
  return league ? await api.League.get(league.leagueId, config.region) : null
}
