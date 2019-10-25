import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function summonerByPUUIDExample () {
  const { region } = config
  const { response: { puuid } } = await api.Lol.Summoner.getByName(config.summonerName, region)
  return await api.Lol.Summoner.getByPUUID(puuid, region)
}
