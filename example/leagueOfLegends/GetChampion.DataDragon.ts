import { RiotApi } from '../../src'
import { RealmServers, Champions } from '../../src/constants'

const api = new RiotApi()

export async function getChampionDetailsDataDragon () {
  return api.leagueOfLegends.dataDragon.getChampion(Champions.TWISTED_FATE)
}
