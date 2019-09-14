import { RiotApi, Regions, FindSummonerBy } from '../src'

const api = new RiotApi()
const exampleSummoner = 'Hide on Bush'

async function example () {
  const data = await api.getSummoner(FindSummonerBy.NAME, exampleSummoner, Regions.KOREA)
  console.log(data)
}

example()
