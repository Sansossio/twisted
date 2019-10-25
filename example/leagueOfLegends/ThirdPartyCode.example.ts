import { RiotApi } from '../../src'
import { config } from '../config/config'

export async function thirdPartyExample () {
  const riot = new RiotApi().Lol
  const { response: { id } } = await riot.Summoner.getByName(config.summonerName, config.region)
  return await riot.ThirdPartyCode.get(id, config.region)
}
