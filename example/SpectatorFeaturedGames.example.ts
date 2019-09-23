import { RiotApi } from '../src'
import { Regions } from '../src/constants'

export async function spectatorFeaturedGames () {
  const api = new RiotApi()
  return await api.spectator.featuredGames(Regions.LAT_NORTH)
}
