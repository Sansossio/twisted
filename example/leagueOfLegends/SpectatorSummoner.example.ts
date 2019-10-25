import { RiotApi } from '../../src'
import { config } from '../config/config'

export async function spectatorSummonerExample () {
  const api = new RiotApi()
  const { summonerName, region } = config
  const { response: { id } } = await api.Lol.Summoner.getByName(summonerName, region)

  return await api.Lol.Spectator.activeGame(id, region)
}
