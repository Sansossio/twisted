import { LolApi } from '../../src'

const api = new LolApi()

export async function queuesDataDragon () {
  return api.DataDragon.getQueues()
}
