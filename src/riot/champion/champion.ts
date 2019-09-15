import { Regions } from '../../enum'
import { BaseApi } from '../base'
import { endpointsV4, endpointsV3 } from '../../enum/endpoints.enum'
import { ChampionMasteryDTO } from '../../dto/Champion/ChampionMastery.dto'
import { ChampionRotationV3DTO } from '../../dto/Champion/ChampionRotation.dto'

/**
 * Third party methods
 */
export class ChampionApi extends BaseApi {
  /**
   * Get champion rotation
   * @param region Riot region
   */
  public async rotation (region: Regions)
  : Promise<ChampionRotationV3DTO> {
    return this.request(region, endpointsV3.ChampionRotation)
  }
  /**
   * Champion mastery by summoner
   * @param encryptedSummonerId
   * @param region
   */
  public async masteryBySummoner (encryptedSummonerId: string, region: Regions) {
    const params = {
      encryptedSummonerId
    }
    return this.request<ChampionMasteryDTO[]>(region, endpointsV4.ChampionMasteryBySummoner, params)
  }
}
