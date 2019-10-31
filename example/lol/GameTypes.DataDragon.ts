import { LolApi } from '../../src'

const api = new LolApi()

export async function gameTypessDataDragon () {
  return api.DataDragon.getGameTypes()
}
