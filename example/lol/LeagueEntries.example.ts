import { LolApi } from '../../src'
import { Queues, Tiers, Divisions, Regions } from '../../src/constants'

export async function leagueEntriesExample () {
  const api = new LolApi()
  return await api.League.entries(Queues.RANKED_SOLO_5x5, Tiers.BRONZE, Divisions.I, Regions.AMERICA_NORTH)
}
