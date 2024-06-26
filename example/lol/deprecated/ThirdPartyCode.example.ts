import { LolApi } from '../../src'
import { config } from '../config/config'

export async function thirdPartyExample () {
  const riot = new LolApi()
  const { response: { id } } = await riot.Summoner.getByName(config.summonerName, config.region)
  try {
    return await riot.ThirdPartyCode.get(id, config.region)
  } catch (e) {
    console.error(e)
    return {}
  }
}
