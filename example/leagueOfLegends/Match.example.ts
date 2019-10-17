import { RiotApi } from '../../src'
import { config } from '../config/config'

export async function matchExample () {
  const api = new RiotApi()
  const { region } = config
  const user = await api.leagueOfLegends.summoner.getByName(config.summonerName, region)
  const {
    response: {
      matches
    }
  } = await api.leagueOfLegends.match.list(user.response.accountId, region)
  const { gameId } = matches[0]
  const match = await api.leagueOfLegends.match.get(gameId, region)
  return match
}
