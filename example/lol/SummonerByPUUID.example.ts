import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function summonerByPUUIDExample () {
  const { region } = config
  const { response: { puuid } } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Summoner.getByPUUID(puuid, region)
}
