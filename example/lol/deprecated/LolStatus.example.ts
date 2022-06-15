import { LolApi } from '../../src'
import { Regions } from '../../src/constants'

export async function lolStatusExample () {
  const api = new LolApi()
  return await api.Status.get(Regions.LAT_NORTH)
}
