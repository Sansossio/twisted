import { TftApi } from '../../src'
import { Regions } from '../../src/constants'

export async function spectatorTFTV5FeaturedGames() {
   const api = new TftApi()
   return await api.SpectatorV5.featuredGames(Regions.AMERICA_NORTH)
}