import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function matchListingExample () {
  const { region } = config
  const user = await api.Summoner.getByName(config.summonerName, region)
  const matchList = await api.Match.list(user.response.accountId, region)
  return matchList
}
