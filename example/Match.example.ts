import { RiotApi } from '../src'
import { config } from './config/config'

export async function matchExample () {
  const api = new RiotApi()
  const { region } = config
  const user = await api.summoner.getByName(config.summonerName, region)
  const {
    matches
  } = await api.match.list(user.accountId, region)
  const { gameId } = matches[0]
  const match = await api.match.get(gameId, region)
  return match
}
