import { RiotApi } from '../../src'
import { Queues, Tiers, Divisions, Regions } from '../../src/constants'

export async function leagueEntriesExample () {
  const api = new RiotApi()
  return await api.leagueOfLegends.league.entries(Queues.RANKED_SOLO_5x5, Tiers.BRONZE, Divisions.I, Regions.AMERICA_NORTH)
}
