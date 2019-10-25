import { RiotApi } from '../../src'

const api = new RiotApi()

export async function queuesDataDragon () {
  return api.Lol.DataDragon.getQueues()
}
