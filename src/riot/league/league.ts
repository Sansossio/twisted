import { BaseApi } from '../base'
import { Regions } from '../../enum'
import { endpointsV4 } from '../../enum/endpoints'
import { SummonerLeagueDto } from '../../dto/League/SummonerLeague/SummonerLeague.dto'

/**
 * League methods
 */
export class LeagueApi extends BaseApi {
  /**
   * Get summoner leagues
   * @param encryptedSummonerId Encrypted summoner ID. Max length 63 characters.
   * @param region
   */
  public async bySummoner (encryptedSummonerId: string, region: Regions) {
    const params = {
      encryptedSummonerId
    }
    return this.request<SummonerLeagueDto>(region, endpointsV4.SummonerLeague, params)
  }
}
