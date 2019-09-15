import { RiotApi, Regions } from '../src'

export async function championRotationExample () {
  const api = new RiotApi()
  return api.getChampionRotation(Regions.LAT_NORTH)
}
