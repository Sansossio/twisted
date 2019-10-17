import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function summonerByAccountIDExample () {
  const { region } = config
  const {
    response: {
      accountId
    }
  } = await api.leagueOfLegends.summoner.getByName(config.summonerName, region)
  return await api.leagueOfLegends.summoner.getByAccountID(accountId, region)
}
