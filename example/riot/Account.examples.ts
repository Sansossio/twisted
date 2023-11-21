import { RiotApi } from '../../src/apis/riot/riot'
import { RegionGroups } from '../../src/constants'

export async function accountV1Examples() {
   const api = new RiotApi()

   const resByRiotId = (await api.Account.getByRiotId('Night Owl', 'na1', RegionGroups.AMERICAS)).response
   console.log('Account info by Riot Id: ', resByRiotId)

   const resByPuuid = (await api.Account.getByPUUID(resByRiotId.puuid, RegionGroups.AMERICAS)).response
   console.log('Account info by PUUID: ', resByPuuid)
}