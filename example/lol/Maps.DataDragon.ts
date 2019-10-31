import { LolApi } from '../../src'

const api = new LolApi()

export async function mapsDataDragon () {
  return api.DataDragon.getMaps()
}
