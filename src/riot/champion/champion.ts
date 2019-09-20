import { Regions } from '../../enum'
import { BaseApi } from '../base'
import { endpointsV4, endpointsV3 } from '../../enum/endpoints.enum'
import { ChampionMasteryDTO } from '../../dto/Champion/ChampionMastery.dto'
import { ChampionRotationV3DTO } from '../../dto/Champion/ChampionRotation.dto'
import { ChampionsScoreDTO } from '../../dto/Champion/ChampionsScore.dto'

/**
 * Third party methods
 */
export class ChampionApi extends BaseApi {
  /**
   * Get champion rotation
   * @param region Riot region
   */
  public async rotation (region: Regions) {
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
  /**
   * Champion mastery by summoner
   * @param encryptedSummonerId
   * @param region
   */
  public async masteryBySummonerChampion (encryptedSummonerId: string, championId: number, region: Regions) {
    const params = {
      encryptedSummonerId,
      championId
    }
    return this.request<ChampionMasteryDTO>(region, endpointsV4.ChampionMasteryBySummonerChampion, params)
  }
  /**
   * Champions mastery score
   * @param encryptedSummonerId
   * @param region
   */
  public async championsScore (encryptedSummonerId: string, region: Regions): Promise<ChampionsScoreDTO> {
    const params = {
      encryptedSummonerId
    }
    let {
      data: score
    } = await this.request<number | undefined>(region, endpointsV4.ChampionsScore, params)
    if (typeof score !== 'number') {
      score = 0
    }
    return {
      score
    }
  }
}
