import { RiotApi } from '../../src/apis/riot/riot'
import { RegionGroups } from '../../src/constants'
import { config } from '../config/config'

export async function accountV1Examples() {
   const api = new RiotApi()

   const resByRiotId = (await api.Account.getByRiotId(config.summonerName, config.tagLine, RegionGroups.AMERICAS)).response
   console.log('Account info by Riot Id: ', resByRiotId)

   const resByPuuid = (await api.Account.getByPUUID(resByRiotId.puuid, RegionGroups.AMERICAS)).response
   console.log('Account info by PUUID: ', resByPuuid)
}