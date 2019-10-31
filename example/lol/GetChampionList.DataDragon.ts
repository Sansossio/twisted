import { LolApi } from '../../src'
import { RealmServers, Champions } from '../../src/constants'

const api = new LolApi()

export async function getChampionListDataDragon () {
  return api.DataDragon.getChampion()
}
