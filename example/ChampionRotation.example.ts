import { RiotApi, Regions } from '../src'

const api = new RiotApi()

async function example () {
  const data = await api.getChampionRotation(Regions.LAT_NORTH)
  console.log(data)
}

example()
