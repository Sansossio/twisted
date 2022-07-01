import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function matchTimeLineExample () {
  const { region } = config
  const user = await api.Summoner.getByName(config.summonerName, region)
  const {
    response: {
      matches
    }
  } = await api.Match.list(user.response.accountId, region)
  const { gameId } = matches[0]
  const matchTimeline = await api.Match.timeline(gameId, region)
  return matchTimeline
}
