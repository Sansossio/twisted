import { TftApi } from '../../src'
import { configTft } from '../config/config'
import { getSummonerTft } from './SummonerTFT.example'

const api = new TftApi()

export async function matchListDetailsTft () {
  const {
    response: {
      puuid
    }
  } = await getSummonerTft()
  return api.Match.listWithDetails(puuid, configTft.tftRegion)
}
