import { Regions, Tiers, Divisions } from '../../../constants'
import { BaseApiTft } from '../base/base.api.tft'
import { endpointsTFTV1 } from '../../../endpoints'
import { LeagueEntryDTO } from '../../../models-dto/league/tft-league'
import { LeagueListDTO } from '../../../models-dto'

export class LeagueTFTApi extends BaseApiTft {
  // Public methods
  /**
   * @deprecated Use getByPUUID instead
   * Get league entries for a given summoner ID
   * @param encryptedSummonerId
   * @param region
   */
  public async get (encryptedSummonerId: string, region: Regions) {
    const params = {
      encryptedSummonerId
    }
    return this.request<LeagueEntryDTO[]>(region, endpointsTFTV1.LeagueBySummoner, params)
  }
  /**
   * Get league entries for a given puuid
   * @param puuid
   * @param region
   */
  public async getByPUUID (puuid: string, region: Regions) {
    const params = {
      puuid
    }
    return this.request<LeagueEntryDTO[]>(region, endpointsTFTV1.LeagueByPuuid, params)
  }
  /**
   * Get the master league
   * @param region
   */
  public async getMasterLeague (region: Regions) {
    return this.request<LeagueListDTO>(region, endpointsTFTV1.LeagueMaster)
  }
  /**
   * Get the grandmaster league
   * @param region
   */
  public async getGrandMasterLeague (region: Regions) {
    return this.request<LeagueListDTO>(region, endpointsTFTV1.LeagueGrandMaster)
  }
  /**
   * Get the challenger league
   * @param region
   */
  public async getChallengerLeague (region: Regions) {
    return this.request<LeagueListDTO>(region, endpointsTFTV1.LeagueChallenger)
  }
  /**
   * Get league entries for given tier and division
   * @param region
   * @param tier
   * @param division
   * @param page defaults to 1
   * @param queue defaults to RANKED_TFT
   */
  public async getByTierDivision (
    region: Regions,
    tier: Tiers,
    division: Divisions,
    page: number = 1,
    queue: string = 'RANKED_TFT',
  ) {
    const params = {
      tier,
      division
    }
    return this.request<LeagueEntryDTO[]>(
      region,
      endpointsTFTV1.LeagueByTierDivision,
      params,
      false,
      { queue, page }
    )
  }
}
