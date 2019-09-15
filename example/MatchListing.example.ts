import { RiotApi } from '../src'
import { config } from './config/config'

const api = new RiotApi()

export async function matchListingExample () {
  const { region } = config
  const user = await api.summoner.getByName(config.summonerName, region)
  const matchList = await api.match.list(user.accountId, region)
  return matchList
}
