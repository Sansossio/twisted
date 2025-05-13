import { RiotApi } from '../../src/apis/riot/riot'
import { RegionGroups, Games } from '../../src/constants'
import { config } from '../config/config'

export async function accountRegionV1Examples() {
   const api = new RiotApi()

   const { puuid } = (await api.Account.getByRiotId(config.summonerName, config.tagLine, RegionGroups.AMERICAS)).response

   return (await api.Account.getActiveRegion(puuid, Games.LOL, RegionGroups.AMERICAS)).response
}