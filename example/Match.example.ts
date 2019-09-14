import { RiotApi, Regions, FindSummonerBy } from '../src'
import { apiKey } from './apiKey'

const api = new RiotApi(apiKey)
const exampleSummoner = 'Hide on Bush'

async function example () {
  const region = Regions.KOREA
  const user = await api.getSummoner(FindSummonerBy.NAME, exampleSummoner, region)
  const {
    matches
  } = await api.match.list(user.accountId, region)
  const { gameId } = matches[0]
  const match = await api.match.get(gameId, region)
  console.log(match)
}

example()
