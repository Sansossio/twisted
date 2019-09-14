import { RiotApi } from '../src'
import { config } from './config';

const api = new RiotApi()

async function example () {
  const { region } = config
  const user = await api.summoner.getByName(config.summonerName, region)
  const matchList = await api.match.list(user.accountId, region)
  console.log(matchList)
}

example()
