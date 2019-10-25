import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function championMasteryBySummonerByChampion () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Lol.Summoner.getByName(config.summonerName, region)
  return await api.Lol.Champion.masteryBySummonerChampion(id, 1, region)
}
