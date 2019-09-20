import { RiotApi } from '../src'
import { config } from './config/config';


export async function spectatorSummonerExample () {
  const api = new RiotApi()
  const { summonerName, region } = config
  const { data: { id } } = await api.summoner.getByName(summonerName, region)

  return await api.spectator.activeGame(id, region)
}
