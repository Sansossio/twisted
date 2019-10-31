import { LolApi } from '../../src'
import { RealmServers } from '../../src/constants'

const api = new LolApi()

export async function realmsDataDragon () {
  return api.DataDragon.getRealms(RealmServers.AMERICA_NORTH)
}
