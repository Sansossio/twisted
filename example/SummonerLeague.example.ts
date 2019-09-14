import { RiotApi, Regions, FindSummonerBy } from '../src'
import { apiKey } from './apiKey'

const api = new RiotApi(apiKey)
const exampleSummoner = 'Hide on Bush'

async function example () {
  const region = Regions.KOREA
  const { id } = await api.getSummoner(FindSummonerBy.NAME, exampleSummoner, region)
  const league = await api.league.bySummoner(id, region)
  console.log(league)
}

example()
