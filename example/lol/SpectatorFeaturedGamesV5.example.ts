import { LolApi } from '../../src'
import { Regions } from '../../src/constants'

export async function spectatorV5FeaturedGames () {
  const api = new LolApi()
  return await api.SpectatorV5.featuredGames(Regions.LAT_NORTH)
}
