import { RiotApi, Regions, FindSummonerBy } from '../src'
import { apiKey } from './apiKey'

const api = new RiotApi(apiKey)
const exampleSummoner = 'Sansossio'

async function example () {
  const data = await api.getSummoner(FindSummonerBy.NAME, exampleSummoner, Regions.LAT_NORTH)
  console.log(data)
}

example()
