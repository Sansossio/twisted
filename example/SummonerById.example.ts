import { RiotApi } from '../src'
import { config } from './config/config'

const api = new RiotApi()

export async function summonerByIdExample () {
  const { region } = config
  const { data: { id } } = await api.summoner.getByName(config.summonerName, region)
  return await api.summoner.getById(id, region)
}
