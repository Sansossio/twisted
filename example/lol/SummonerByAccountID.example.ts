import { RiotApi } from '../../src'
import { LolApi } from '../../src'
import { config } from '../config/config'

const rApi = new RiotApi()
const api = new LolApi()

export async function summonerByAccountIDExample () {
  const { region } = config
  // const { response: { accountId } } = await api.Summoner.getByName(config.summonerName, region)
  const { response: { puuid } } = await rApi.Account.getByRiotId(config.summonerName, config.tagLine, config.regionGroup)
  const { response: { accountId } } = await api.Summoner.getByPUUID(puuid, region)
  return await api.Summoner.getByAccountID(accountId, region)
}
