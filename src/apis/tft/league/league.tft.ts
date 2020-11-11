import { Regions } from '../../../constants'
import { BaseApiTft } from '../base/base.api.tft'
import { endpointsTFTV1 } from '../../../endpoints'
import { LeagueEntryDTO } from '../../../models-dto/league/tft-league'
import { LeagueListDTO } from '../../../models-dto'

export class LeagueTFTApi extends BaseApiTft {
  // Public methods
  /**
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

}
