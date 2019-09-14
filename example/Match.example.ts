import { RiotApi } from '../src'
import { config } from './config';

const api = new RiotApi()

async function example () {
  const { region } = config
  const user = await api.summoner.getByName(config.summonerName, region)
  const {
    matches
  } = await api.match.list(user.accountId, region)
  const { gameId } = matches[0]
  const match = await api.match.get(gameId, region)
  console.log(match)
}

example()
