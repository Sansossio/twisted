import { RiotApi, Regions, FindSummonerBy } from '../src'
import { apiKey } from './apiKey'

const api = new RiotApi(apiKey)
const exampleSummoner = 'Hide on Bush'

async function example () {
  const data = await api.getSummoner(FindSummonerBy.NAME, exampleSummoner, Regions.KOREA)
  console.log(data)
}

example()
