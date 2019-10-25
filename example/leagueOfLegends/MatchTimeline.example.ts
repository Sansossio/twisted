import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function matchTimeLineExample () {
  const { region } = config
  const user = await api.Lol.Summoner.getByName(config.summonerName, region)
  const {
    response: {
      matches
    }
  } = await api.Lol.Match.list(user.response.accountId, region)
  const { gameId } = matches[0]
  const matchTimeline = await api.Lol.Match.timeline(gameId, region)
  return matchTimeline
}
