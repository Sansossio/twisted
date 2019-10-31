import { LolApi } from '../../src'

const api = new LolApi()

export async function matchesSeedData () {
  const id = 1
  return api.Seed.matches(id)
}
