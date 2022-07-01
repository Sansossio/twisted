import { LolApi } from '../../src'
import { config } from '../config/config'
import { Champions } from '../../src/constants'
import { MatchQueryDTO } from '../../src/models-dto'

const api = new LolApi()

export async function matchListingFilteringExample () {
  const { region } = config
  const user = await api.Summoner.getByName(config.summonerName, region)
  const filter: MatchQueryDTO = {
    champion: Champions.TWISTED_FATE
  }
  const matchList = await api.Match.list(user.response.accountId, region, filter)
  return matchList
}
