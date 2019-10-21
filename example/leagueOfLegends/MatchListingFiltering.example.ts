import { RiotApi } from '../../src'
import { config } from '../config/config'
import { MatchQueryDTO } from '../../src/dto/Match/Query/MatchQuery.dto'
import { Champions } from '../../src/constants'

const api = new RiotApi()

export async function matchListingFilteringExample () {
  const { region } = config
  const user = await api.leagueOfLegends.summoner.getByName(config.summonerName, region)
  const filter: MatchQueryDTO = {
    champion: Champions.TWISTED_FATE
  }
  const matchList = await api.leagueOfLegends.match.list(user.response.accountId, region, filter)
  return matchList
}
