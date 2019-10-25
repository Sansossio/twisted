import { RiotApi } from '../../src'

const api = new RiotApi()

export async function versionsDataDragon () {
  return api.Lol.DataDragon.getVersions()
}
