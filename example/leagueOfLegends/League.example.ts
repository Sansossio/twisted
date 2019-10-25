import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function leagueExample () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Lol.Summoner.getByName(config.summonerName, region)
  const {
    response: [league]
  } = await api.Lol.League.bySummoner(id, region)
  return await api.Lol.League.get(league.leagueId, region)
}
