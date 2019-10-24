import { RiotApi } from '../../src'

const api = new RiotApi()

export async function seasonsDataDragon () {
  return api.leagueOfLegends.dataDragon.getSeasons()
}
