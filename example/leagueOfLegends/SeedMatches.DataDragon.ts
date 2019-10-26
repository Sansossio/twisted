import { RiotApi } from '../../src'

const api = new RiotApi()

export async function matchesSeedData () {
  const id = 1
  return api.Lol.Seed.matches(id)
}
