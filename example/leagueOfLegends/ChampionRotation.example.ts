import { RiotApi } from '../../src'
import { Regions } from '../../src/constants'

export async function championRotationExample () {
  const api = new RiotApi().leagueOfLegends
  return api.champion.rotation(Regions.LAT_NORTH)
}
