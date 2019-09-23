import { RiotApi } from '../src'
import { Regions } from '../src/constants'
import { Queues, Tiers, Divisions } from '../src/constants'

export async function leagueEntriesExample () {
  const api = new RiotApi()
  return await api.league.entries(Queues.RANKED_SOLO_5x5, Tiers.BRONZE, Divisions.I, Regions.AMERICA_NORTH)
}
