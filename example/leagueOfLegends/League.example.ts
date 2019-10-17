import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function leagueExample () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.leagueOfLegends.summoner.getByName(config.summonerName, region)
  const {
    response: [league]
  } = await api.leagueOfLegends.league.bySummoner(id, region)
  return await api.leagueOfLegends.league.get(league.leagueId, region)
}
