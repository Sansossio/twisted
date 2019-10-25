import { RiotApi } from '../../src'

const api = new RiotApi()

export async function gameTypessDataDragon () {
  return api.Lol.DataDragon.getGameTypes()
}
