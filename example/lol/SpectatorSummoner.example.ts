import { LolApi } from '../../src'
import { config } from '../config/config'

export async function spectatorSummonerExample () {
  const api = new LolApi()
  const { summonerName, region } = config
  const { response: { id } } = await api.Summoner.getByName(summonerName, region)

  return await api.Spectator.activeGame(id, region)
}
