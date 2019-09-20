import { RiotApi } from '../src'
import { config } from './config/config'

export async function matchExample () {
  const api = new RiotApi()
  const { region } = config
  const user = await api.summoner.getByName(config.summonerName, region)
  const {
    response: {
      matches
    }
  } = await api.match.list(user.response.accountId, region)
  const { gameId } = matches[0]
  const match = await api.match.get(gameId, region)
  return match
}
