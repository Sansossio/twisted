import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function summonerByAccountIDExample () {
  const { region } = config
  const {
    response: {
      accountId
    }
  } = await api.Lol.Summoner.getByName(config.summonerName, region)
  return await api.Lol.Summoner.getByAccountID(accountId, region)
}
