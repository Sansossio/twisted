import { RiotApi } from '../../src'
import { LolApi } from '../../src'
import { config } from '../config/config'

const rApi = new RiotApi()
const api = new LolApi()

export async function championsScoreExample () {
  const { response: { puuid } } = await rApi.Account.getByRiotId(config.summonerName, config.region, config.regionGroup)
  return await api.Champion.championsScore(puuid, config.region)
}
