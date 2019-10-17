import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function summonerByPUUIDExample () {
  const { region } = config
  const { response: { puuid } } = await api.leagueOfLegends.summoner.getByName(config.summonerName, region)
  return await api.leagueOfLegends.summoner.getByPUUID(puuid, region)
}
