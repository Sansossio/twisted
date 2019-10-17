import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function championsScoreExample () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.leagueOfLegends.summoner.getByName(config.summonerName, region)
  return await api.leagueOfLegends.champion.championsScore(id, region)
}
