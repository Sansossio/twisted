import { RiotApi } from '../../src'

const api = new RiotApi()

export async function languagesDataDragon () {
  return api.leagueOfLegends.dataDragon.getLanguages()
}
