import { RiotApi, Regions, FindSummonerBy } from '../src'

const api = new RiotApi()
const exampleSummoner = 'Hide on Bush'

async function example () {
  const region = Regions.KOREA
  const user = await api.getSummoner(FindSummonerBy.NAME, exampleSummoner, region)
  const {
    matches
  } = await api.match.list(user.accountId, region)
  const { gameId } = matches[0]
  const matchTimeline = await api.match.timeline(gameId, region)
  console.log(matchTimeline)
}

example()
