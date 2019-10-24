import { RiotApi } from '../../src'

const api = new RiotApi()

export async function mapsDataDragon () {
  return api.leagueOfLegends.dataDragon.getMaps()
}
