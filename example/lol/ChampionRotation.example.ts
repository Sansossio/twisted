import { LolApi } from '../../src'
import { Regions } from '../../src/constants'

export async function championRotationExample () {
  const api = new LolApi()
  return api.Champion.rotation(Regions.LAT_NORTH)
}
