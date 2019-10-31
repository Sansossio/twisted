import { LolApi } from '../../src'
import { Queues, Tiers, Divisions, Regions } from '../../src/constants'

export async function leagueExpExample () {
  const api = new LolApi()
  return await api.League.exp(Queues.RANKED_SOLO_5x5, Tiers.BRONZE, Divisions.I, Regions.AMERICA_NORTH)
}
