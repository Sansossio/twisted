import { RiotApi } from '../../src'
import { Regions } from '../../src/constants'

export async function championRotationExample () {
  const api = new RiotApi().Lol
  return api.Champion.rotation(Regions.LAT_NORTH)
}
