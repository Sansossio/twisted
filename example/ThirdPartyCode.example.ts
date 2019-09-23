import { RiotApi } from '../src'
import { config } from './config/config'

export async function thirdPartyExample () {
  const riot = new RiotApi()
  const { response: { id } } = await riot.summoner.getByName(config.summonerName, config.region)
  return await riot.thirdPartyCode.get(id, config.region)
}
