import { LolApi } from '../../src'
import { config } from '../config/config'

const api = new LolApi()

export async function clashTournamentById () {
  const { region } = config
  const {
    response: [
      {
        id
      }
    ]
  } = await api.Clash.getTournaments(region)
  return api.Clash.getTournamentById(id, region)
}
