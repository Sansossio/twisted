import { LolApi } from '../../src'
import { config } from '../config/config'

export async function topChampionMasteryBySummonerExample() {
  const api = new LolApi()
  const { summonerName, region } = config
  const { response: {
    id
  } } = await api.Summoner.getByName(summonerName, region)

  return await api.Champion.topMasteryBySummoner(id, 4, region)
}

topChampionMasteryBySummonerExample()
