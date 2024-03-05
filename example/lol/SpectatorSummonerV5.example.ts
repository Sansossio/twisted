import { LolApi } from '../../src'
import { config } from '../config/config'

export async function spectatorV5SummonerExample () {
  const api = new LolApi()
  const { summonerName, region } = config
  const { response: { puuid } } = await api.Summoner.getByName(summonerName, region)
  const data = (await api.SpectatorV5.activeGame(puuid, region)).response
  console.log(data)
}

spectatorV5SummonerExample()
