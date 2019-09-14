import { RiotApi, Regions, FindSummonerBy } from '../src'
import { apiKey } from './apiKey'

const api = new RiotApi(apiKey)
const exampleSummoner = 'Hide on Bush'

async function example () {
  const region = Regions.KOREA
  const user = await api.getSummoner(FindSummonerBy.NAME, exampleSummoner, region)
  const matchList = await api.match.matchList(user.accountId, region)
  console.log(matchList)
}

example()
