import { Regions, FindSummonerBy } from '..'
import { BaseApi } from './base'
import { ChampionRotationV3DTO } from '../DTO/Champion/ChampionRotation.DTO'
import { SummonerV4DTO } from '../dto/Summoner/Summoner.dto'
import { LolStatusDTO } from '../dto/Status/LolStatus.dto'
import { endpointsV4, endpointsV3 } from '../enum/endpoints'
import { Matchv4 } from './matchv4'

/**
 * Riot Games api wrap
 */
export class RiotApi extends BaseApi {
  /**
   * Match methods
   */
  public readonly match: Matchv4 = new Matchv4(this.getKey())

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
  public async getSummoner (by: FindSummonerBy, value: string, region: Regions)
  : Promise<SummonerV4DTO> {
    let { path } = endpointsV4.Summoner
    if (by === FindSummonerBy.ID) {
      path = path.replace('/$(by)/', '')
    }
    const params = {
      summonerName: value,
      by
    }
    return this.request(region, endpointsV4.Summoner, params)
  }

  /**
   * Lol status by server
   * @param region Riot region
   */
  public async getLolStatus (region: Regions)
  : Promise<LolStatusDTO> {
    return this.request(region, endpointsV3.LolStatus)
  }
}
