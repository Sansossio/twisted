import { LolApi } from '../../src'
import { config } from '../config/config'
import { Queues } from '../../src/constants'

const api = new LolApi()

export async function challengerLeagueByQueueExample () {
  return await api.League.getChallengerLeaguesByQueue(Queues.RANKED_SOLO_5x5, config.region)
}
