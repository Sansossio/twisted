import { TftRegions } from '../../../constants'
import { BaseApiTft } from '../base/base.api.tft'
import { MatchTFTDTO } from '../../../models-dto/matches/tft-matches/match-tft.dto'
import { MatchTFTQueryDTO } from '../../../models-dto/matches/tft-matches/match-tft-query.dto'
import { endpointsTFTV1 } from '../../../endpoints'

export class MatchTFTApi extends BaseApiTft {
  // Public methods
  /**
   * Get match by id
   * @param matchId
   * @param region
   */
  public async get (matchId: string, region: TftRegions) {
    const params = {
      matchId
    }
    return this.request<MatchTFTDTO>(region, endpointsTFTV1.Match, params)
  }

  /**
   * Get match listing
   * @param summonerPUUID
   * @param region
   */
  public async list (summonerPUUID: string, region: TftRegions, query?: MatchTFTQueryDTO) {
    const params = {
      summonerPUUID
    }
    return this.request<string[]>(region, endpointsTFTV1.MatchListing, params, false, query)
  }

  /**
   * Get match listing (with details)
   */
  public async listWithDetails (summonerPUUID: string, region: TftRegions, query?: MatchTFTQueryDTO) {
    const params = {
      summonerPUUID
    }
    const response: MatchTFTDTO[] = []
    // Match list
    const {
      response: ids
    } = await this.list(summonerPUUID, region, query)
    // Load details
    for (const id of ids) {
      const {
        response: match
      } = await this.get(id, region)
      response.push(match)
    }

    return response
  }
}
