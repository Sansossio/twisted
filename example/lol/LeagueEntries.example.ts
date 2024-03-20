import { LolApi } from '../../src'
import { Queues, Tiers, Divisions, Regions } from '../../src/constants'

export async function leagueEntriesExample () {
  const api = new LolApi()
  const { response: entries } = await api.League.entries(Queues.RANKED_SOLO_5x5, Tiers.BRONZE, Divisions.I, Regions.LAT_NORTH)

  return entries;
}

leagueEntriesExample()