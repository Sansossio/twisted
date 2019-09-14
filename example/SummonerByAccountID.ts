import { RiotApi } from '../src'
import { config } from './config'

const api = new RiotApi()

async function example () {
  const { region } = config
  const { accountId } = await api.summoner.getByName(config.summonerName, region)
  const user = await api.summoner.getByAccountID(accountId, region)
  console.log(user)
}

example()
