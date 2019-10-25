import { RiotApi } from '../../src'

const api = new RiotApi()

export async function gameModesDataDragon () {
  return api.Lol.DataDragon.getGameModes()
}
