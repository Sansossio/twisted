import { RiotApi, Regions, FindSummonerBy } from '../src'

const api = new RiotApi()
const exampleSummoner = 'Hide on Bush'

async function example () {
  const region = Regions.KOREA
  const user = await api.getSummoner(FindSummonerBy.NAME, exampleSummoner, region)
  const matchList = await api.match.list(user.accountId, region)
  console.log(matchList)
}

example()
