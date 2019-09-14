export interface IEndpoint {
  path: string
  version: number
  prefix: string
}

interface IEndpoints {
  [key: string]: IEndpoint
}

export const endpointsV4: IEndpoints = {
  Summoner: {
    path: 'summoners/$(by)/$(summonerName)',
    prefix: 'summoner',
    version: 4
  },
  MatchListing: {
    path: 'matchlists/by-account/$(encryptedAccountId)',
    prefix: 'match',
    version: 4
  }
}

export const endpointsV3: IEndpoints = {
  ChampionRotation: {
    path: 'champion-rotations',
    prefix: 'platform',
    version: 3
  },
  LolStatus: {
    path: 'shard-data',
    prefix: 'status',
    version: 3
  }
}
