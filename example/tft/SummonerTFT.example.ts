import { TftApi } from '../../src'
import { configTft } from '../config/config'

const api = new TftApi()

export async function getSummonerTft () {
  return api.Summoner.getByName(configTft.summonerName, configTft.region)
}
