import { RiotApi } from '../../src'
import { TftApi } from '../../src'
import { RegionGroups, Regions } from '../../src/constants'

export async function tftSpectatorActiveGames () {
   const rApi = new RiotApi()
   const tApi = new TftApi()

   const { puuid } = (await rApi.Account.getByRiotId('Mimoru', '6129', RegionGroups.AMERICAS)).response
   return await tApi.SpectatorV5.activeGame(puuid, Regions.AMERICA_NORTH)
}
