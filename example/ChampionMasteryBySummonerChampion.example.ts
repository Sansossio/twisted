import { RiotApi } from '../src'
import { config } from './config/config'

const api = new RiotApi()

export async function championMasteryBySummonerByChampion () {
  const { region } = config
  const {
    data: {
      id
    }
  } = await api.summoner.getByName(config.summonerName, region)
  return await api.champion.masteryBySummonerChampion(id, 1, region)
}
