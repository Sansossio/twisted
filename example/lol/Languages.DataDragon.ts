import { LolApi } from '../../src'

const api = new LolApi()

export async function languagesDataDragon () {
  return api.DataDragon.getLanguages()
}
