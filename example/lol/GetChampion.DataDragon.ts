import { LolApi } from '../../src'
import { RealmServers, Champions } from '../../src/constants'

const api = new LolApi()

export async function getChampionDetailsDataDragon () {
  return api.DataDragon.getChampion(Champions.TWISTED_FATE)
}
