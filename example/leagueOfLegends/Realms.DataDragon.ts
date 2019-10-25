import { RiotApi } from '../../src'
import { RealmServers } from '../../src/constants'

const api = new RiotApi()

export async function realmsDataDragon () {
  return api.Lol.DataDragon.getRealms(RealmServers.AMERICA_NORTH)
}
