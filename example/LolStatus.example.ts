import { RiotApi, Regions } from '../src'


export async function lolStatusExample () {
  const api = new RiotApi()
  return await api.getLolStatus(Regions.LAT_NORTH)
}
