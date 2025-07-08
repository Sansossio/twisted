import { RiotApi } from '../../../src'
import { LolApi } from '../../../src'
import { config } from '../../config/config'

const rApi = new RiotApi()
const api = new LolApi()

export async function summonerByIdExample () {
  const { response: { puuid } } = await rApi.Account.getByRiotId(config.summonerName, config.region, config.regionGroup)
  const { response: { id } } = await api.Summoner.getByPUUID(puuid, config.region)
  return await api.Summoner.getById(id, config.region)
}
