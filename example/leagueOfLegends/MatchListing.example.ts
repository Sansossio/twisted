import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function matchListingExample () {
  const { region } = config
  const user = await api.leagueOfLegends.summoner.getByName(config.summonerName, region)
  const matchList = await api.leagueOfLegends.match.list(user.response.accountId, region)
  return matchList
}
