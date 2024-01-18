import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function championMasteryByPUUIDByChampion () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Champion.masteryByPUUIDChampion(id, 1, region)
}
