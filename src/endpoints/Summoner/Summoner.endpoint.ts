import { IEndpoint } from '../endpoints'

export const SummonerEndpoint: IEndpoint = {
  path: 'summoner/v4/summoners/$(by)/$(summonerName)',
  version: 4
}
