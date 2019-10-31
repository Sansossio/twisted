import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function leagueExample () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Summoner.getByName(config.summonerName, region)
  const {
    response: [league]
  } = await api.League.bySummoner(id, region)
  return await api.League.get(league.leagueId, region)
}
