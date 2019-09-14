import { RiotApi, Regions } from '../src'
import { config } from './config'

const api = new RiotApi()

async function example () {
  const data = await api.summoner.getByName(config.summonerName, config.region)
  console.log(data)
}

example()
