import { RiotApi } from '../src/riot'
import { apiKey } from './apiKey'
import { Regions } from '../src/enum/regions'
import { SummonerBy } from '../src/endpoints/Summoner/Summoner.endpoint';

const api = new RiotApi(apiKey)

async function example () {
  const data = await api.getSummoner(SummonerBy.NAME, 'Sansossio', Regions.LAT_NORTH)
  console.log(data)
}

example()
