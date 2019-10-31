import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function summonerByAccountIDExample () {
  const { region } = config
  const {
    response: {
      accountId
    }
  } = await api.Summoner.getByName(config.summonerName, region)
  return await api.Summoner.getByAccountID(accountId, region)
}
