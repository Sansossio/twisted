import { TftApi } from '../../src'
import { configTft } from '../config/config'
import { getSummonerTft } from './SummonerTFT.example'

const api = new TftApi()

export async function TftLeagueBySummoner () {
  const {response} = await getSummonerTft()
  const league = await api.League.get(response.id, configTft.region)
  console.log(league)
}
