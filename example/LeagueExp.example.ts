import { RiotApi } from '../src'
import { Regions } from '../src/constants'
import { Queues, Tiers, Divisions } from '../src/constants'

export async function leagueExpExample () {
  const api = new RiotApi()
  return await api.league.exp(Queues.RANKED_SOLO_5x5, Tiers.BRONZE, Divisions.I, Regions.AMERICA_NORTH)
}
