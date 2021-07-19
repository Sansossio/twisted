import { RiotApi } from '../../src'
import { configRiot } from '../config/config'

const api = new RiotApi()

export async function getAccountByRiotId() {
  return api.Account.getByRiotId(configRiot.tagline, configRiot.gameName, configRiot.riotRegion)
}

export async function getAccountByPuuid() {
  return api.Account.getByPuuid(configRiot.puuid, configRiot.riotRegion)
}

export async function getMyAccount() {
  return api.Account.getMe(configRiot.riotRegion)
}