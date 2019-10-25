import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function championMasteryBySummoner () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.Lol.Summoner.getByName(config.summonerName, region)
  return await api.Lol.Champion.masteryBySummoner(id, region)
}
