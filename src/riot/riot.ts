import { Regions, FindSummonerBy } from '..'
import { BaseApi } from './base'
import { ChampionRotationV3DTO } from '../DTO/Champion/ChampionRotation.DTO'
import { SummonerV4DTO } from '../dto/Summoner/Summoner.dto'
import { LolStatusDTO } from '../dto/Status/LolStatus.dto'
import { endpointsV4, endpointsV3 } from '../enum/endpoints'
import { MatchApi } from './match/match'
import { LeagueApi } from './league/league'

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
   * Get champion rotation
   * @param region Riot region
   */
  public async getChampionRotation (region: Regions)
  : Promise<ChampionRotationV3DTO> {
    return this.request(region, endpointsV3.ChampionRotation)
  }

  /**
   * Get summoner
   * @param by {SummonerBy}
   * @param value Value to find
   * @param region Riot region
   */
  public async getSummoner (by: FindSummonerBy, value: string, region: Regions) {
    let { path } = endpointsV4.Summoner
    if (by === FindSummonerBy.ID) {
      path = path.replace('/$(by)/', '')
    }
    const params = {
      summonerName: value,
      by
    }
    return this.request<SummonerV4DTO>(region, endpointsV4.Summoner, params)
  }

  /**
   * Lol status by server
   * @param region Riot region
   */
  public async getLolStatus (region: Regions) {
    return this.request<LolStatusDTO>(region, endpointsV3.LolStatus)
  }
}
