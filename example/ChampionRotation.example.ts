import { RiotApi, Regions } from '../src'

export async function championRotationExample () {
  const api = new RiotApi()
  return api.champion.rotation(Regions.LAT_NORTH)
}
