import { RiotApi } from '../../src'
import { config } from '../config/config'

export async function spectatorSummonerExample () {
  const api = new RiotApi()
  const { summonerName, region } = config
  const { response: { id } } = await api.leagueOfLegends.summoner.getByName(summonerName, region)

  return await api.leagueOfLegends.spectator.activeGame(id, region)
}
