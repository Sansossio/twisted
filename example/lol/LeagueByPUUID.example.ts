import { LolApi, RiotApi } from '../../src'
import { Regions } from '../../src/constants'
import { config } from '../config/config'

export async function leaguesByPUUIDExample() {
   const api = new LolApi()
   const rApi = new RiotApi()

   const { response: { puuid }} = await rApi.Account.getByRiotId(config.summonerName, config.tagLine, config.regionGroup)
   const { response: data } = await api.League.byPUUID(puuid, Regions.EU_WEST)
   return data;
}
