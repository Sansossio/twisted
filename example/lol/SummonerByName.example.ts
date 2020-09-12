import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi({
  debug: {
    logRatelimits: true,
    logTime: true,
    logUrls: true
  }
})

export async function summonerByNameExample () {
  return await api.Summoner.getByName(config.summonerName, config.region)
}
