import { RiotApi } from '../../src'
import { LolApi } from '../../src'
import { config } from '../config/config'

export async function spectatorV5SummonerExample () {
  const rApi = new RiotApi()
  const api = new LolApi()
  const { response: { puuid } } = await rApi.Account.getByRiotId(config.summonerName, config.region, config.regionGroup)
  return await api.SpectatorV5.activeGame(puuid, config.region)
}
