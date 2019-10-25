import { RiotApi } from '../../src'
import { config } from '../config/config'
import { Queues } from '../../src/constants'

const api = new RiotApi()

export async function challengerLeagueByQueueExample () {
  return await api.Lol.League.getChallengerLeaguesByQueue(Queues.RANKED_SOLO_5x5, config.region)
}
