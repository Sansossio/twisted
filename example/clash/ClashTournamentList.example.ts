import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function clashTournamentList () {
  const { region } = config
  const {
    response
  } = await api.Clash.getTournaments(region)
  return response
}
