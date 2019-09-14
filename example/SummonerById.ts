import { RiotApi } from '../src'
import { config } from './config'

const api = new RiotApi()

async function example () {
  const { region } = config
  const { id } = await api.summoner.getByName(config.summonerName, region)
  const user = await api.summoner.getById(id, region)
  console.log(user)
}

example()
