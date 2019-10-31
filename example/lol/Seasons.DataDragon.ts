import { LolApi } from '../../src'

const api = new LolApi()

export async function seasonsDataDragon () {
  return api.DataDragon.getSeasons()
}
