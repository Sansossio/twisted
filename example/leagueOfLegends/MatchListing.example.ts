import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function matchListingExample () {
  const { region } = config
  const user = await api.Lol.Summoner.getByName(config.summonerName, region)
  const matchList = await api.Lol.Match.list(user.response.accountId, region)
  return matchList
}
