import { RiotApi } from '../src'
import { config } from './config/config'

const api = new RiotApi()

export async function summonerByAccountIDExample () {
  const { region } = config
  const {
    data: {
      accountId
    }
  } = await api.summoner.getByName(config.summonerName, region)
  return await api.summoner.getByAccountID(accountId, region)
}
