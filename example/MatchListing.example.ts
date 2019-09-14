import { RiotApi, Regions, FindSummonerBy } from '../src'
import { apiKey } from './apiKey'

const api = new RiotApi(apiKey)
const exampleSummoner = 'Sansossio'

async function example () {
  const region = Regions.LAT_NORTH
  const user = await api.getSummoner(FindSummonerBy.NAME, exampleSummoner, region)
  const matchList = await api.match.matchList(user.accountId, region)
  console.log(matchList)
}

example()
