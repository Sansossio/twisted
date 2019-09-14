import { Regions, FindSummonerBy } from '..'
import { BaseApi } from './base'
import { ChampionRotationV3DTO } from '../DTO/Champion/ChampionRotation.DTO'
import { LolStatusDTO } from '../dto/Status/LolStatus.dto'
import { endpointsV3 } from '../enum/endpoints.enum'
import { MatchApi } from './match/match'
import { LeagueApi } from './league/league'
import { SummonerApi } from './summoner/summoner'

/**
 * Riot Games api wrap
 */
export class RiotApi extends BaseApi {
  /**
   * Match methods
   */
  public readonly match = new MatchApi(this.getKey())
  /**
   * League methods
   */
  public readonly league = new LeagueApi(this.getKey())
  /**
   * Summoner methods
   */
  public readonly summoner = new SummonerApi(this.getKey())
  /**
   * Get champion rotation
   * @param region Riot region
   */
  public async getChampionRotation (region: Regions)
  : Promise<ChampionRotationV3DTO> {
    return this.request(region, endpointsV3.ChampionRotation)
  }
  /**
   * Lol status by server
   * @param region Riot region
   */
  public async getLolStatus (region: Regions) {
    return this.request<LolStatusDTO>(region, endpointsV3.LolStatus)
  }
}
