import { Regions } from '../../../constants'
import { endpointsV4, endpointsV3 } from '../../../endpoints/endpoints'
import { ChampionMasteryDTO } from '../../../dto/Champion/ChampionMastery.dto'
import { ChampionsScoreDTO } from '../../../dto/Champion/ChampionsScore.dto'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * Third party methods
 */
export class ChampionApi extends BaseApiLol {
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
      response: score
    } = await this.request<number | undefined>(region, endpointsV4.ChampionsScore, params)
    if (typeof score !== 'number') {
      score = 0
    }
    return {
      score
    }
  }
}
