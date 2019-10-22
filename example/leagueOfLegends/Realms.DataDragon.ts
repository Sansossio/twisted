import { RiotApi } from '../../src'
import { RealmServers } from '../../src/constants'

const api = new RiotApi()

export async function realmsDataDragon () {
  return api.leagueOfLegends.dataDragon.getRealms(RealmServers.AMERICA_NORTH)
}
