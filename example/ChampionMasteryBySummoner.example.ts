import { RiotApi } from '../src'
import { config } from './config/config'

const api = new RiotApi()

export async function championMasteryBySummoner () {
  const { region } = config
  const {
    response: {
      id
    }
  } = await api.summoner.getByName(config.summonerName, region)
  return await api.champion.masteryBySummoner(id, region)
}
