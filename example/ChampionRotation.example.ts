import { RiotApi, Regions } from '../src'
import { apiKey } from './apiKey'

const api = new RiotApi(apiKey)

async function example () {
  const data = await api.getChampionRotation(Regions.LAT_NORTH)
  console.log(data)
}

example()
