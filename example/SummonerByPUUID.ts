import { RiotApi } from '../src'
import { config } from './config'

const api = new RiotApi()

async function example () {
  const { region } = config
  const { puuid } = await api.summoner.getByName(config.summonerName, region)
  const user = await api.summoner.getByPUUID(puuid, region)
  console.log(user)
}

example()
