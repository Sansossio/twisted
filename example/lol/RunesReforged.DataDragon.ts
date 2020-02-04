import { LolApi } from '../../src'

const api = new LolApi()

export async function runesReforgedDataDragon () {
  return api.DataDragon.getRunesReforged()
}
