import { LolApi } from '../../src'

const api = new LolApi()

export async function gameModesDataDragon () {
  return api.DataDragon.getGameModes()
}
