import { IEndpoint } from '../endpoints'

export const SummonerEndpoint: IEndpoint = {
  path: 'summoner/v4/summoners/$(by)/$(summonerName)',
  version: 4
}

/**
 * Find summoner by
 */
export const enum SummonerBy {
  ACCOUNT_ID = 'by-account',
  NAME = 'by-name',
  PUUID = 'by-puuid',
  ID = ''
}
