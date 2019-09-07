import { RiotApi } from '../src/riot'
import { apiKey } from './apiKey'
import { Regions } from '../src/enum/regions'

const api = new RiotApi(apiKey)

async function example () {
  const data = await api.getChampionRotation(Regions.LAT_NORTH)
  console.log(data)
}

example()
