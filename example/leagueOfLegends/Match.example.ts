import { RiotApi } from '../../src'
import { config } from '../config/config'

export async function matchExample () {
  const api = new RiotApi()
  const { region } = config
  const user = await api.Lol.Summoner.getByName(config.summonerName, region)
  const {
    response: {
      matches
    }
  } = await api.Lol.Match.list(user.response.accountId, region)
  const { gameId } = matches[0]
  const match = await api.Lol.Match.get(gameId, region)
  return match
}
