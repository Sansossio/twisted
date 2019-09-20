import { RiotApi } from '../src'
import { config } from './config/config'

const api = new RiotApi()

export async function leagueExample () {
  const { region } = config
  const {
    data: {
      id
    }
  } = await api.summoner.getByName(config.summonerName, region)
  const {
    data: [league]
  } = await api.league.bySummoner(id, region)
  return await api.league.get(league.leagueId, region)
}
