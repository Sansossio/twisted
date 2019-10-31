import { LolApi } from '../../src'

const api = new LolApi()

export async function versionsDataDragon () {
  return api.DataDragon.getVersions()
}
