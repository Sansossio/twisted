import { LolApi } from '../../src'
import { Regions } from '../../src/constants'

export async function spectatorFeaturedGames () {
  const api = new LolApi()
  return await api.Spectator.featuredGames(Regions.LAT_NORTH)
}
