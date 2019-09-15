import { RiotApi, Regions } from '../src'


export async function spectatorFeaturedGames () {
  const api = new RiotApi()
  return await api.spectator.featuredGames(Regions.LAT_NORTH)
}
