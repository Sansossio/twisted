import { RiotApi } from '../../src'
import { RealmServers, Champions } from '../../src/constants'

const api = new RiotApi()

export async function getChampionListDataDragon () {
  return api.Lol.DataDragon.getChampion()
}
