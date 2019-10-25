import { RiotApi } from '../../src'

const api = new RiotApi()

export async function languagesDataDragon () {
  return api.Lol.DataDragon.getLanguages()
}
