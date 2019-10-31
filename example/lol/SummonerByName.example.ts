import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function summonerByNameExample () {
  return await api.Summoner.getByName(config.summonerName, config.region)
}
