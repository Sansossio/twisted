import { RiotApi, Regions } from '../src'


export async function spectorFeaturedGames () {
  const api = new RiotApi()
  return await api.spector.featuredGames(Regions.LAT_NORTH)
}
