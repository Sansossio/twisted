import { LolApi } from '../../src'
import { config } from '../config/config'

export async function matchExample () {
  const api = new LolApi()
  const { region } = config
  const user = await api.Summoner.getByName(config.summonerName, region)
  const {
    response: {
      matches
    }
  } = await api.Match.list(user.response.accountId, region)
  const { gameId } = matches[0]
  const match = await api.Match.get(gameId, region)
  return match
}
