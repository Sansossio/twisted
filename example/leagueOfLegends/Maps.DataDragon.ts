import { RiotApi } from '../../src'

const api = new RiotApi()

export async function mapsDataDragon () {
  return api.Lol.DataDragon.getMaps()
}
