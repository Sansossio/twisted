import { RiotApi } from '../../src'
import { LolApi } from '../../src'
import { config } from '../config/config'

const rApi = new RiotApi()
const api = new LolApi()

export async function summonerByPUUIDExample () {
  const { response: { puuid }} = await rApi.Account.getByRiotId(config.summonerName, config.tagLine, config.regionGroup)
  return await api.Summoner.getByPUUID(puuid, config.region)
}
