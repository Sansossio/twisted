import { RiotApi } from '../../src'
import { Regions } from '../../src/constants'

export async function lolStatusExample () {
  const api = new RiotApi()
  return await api.leagueOfLegends.status.get(Regions.LAT_NORTH)
}
