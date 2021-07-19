import { LorRegions } from '../../constants'
import { BaseApiLor } from './LorBase'
import { endpointsLorV1 } from '../../endpoints'
import { MatchLorDto, MatchLorQueryDto } from '../../models-dto/LorModels/LorMatchDtos'

export class MatchLorApi extends BaseApiLor {
  // Public methods
  /**
   * Get match by id
   * @param matchId
   * @param region
   */
  public async getMatch (matchId: string, region: LorRegions) {
    const params = {
      matchId
    }
    return this.request<MatchLorDto>(region, endpointsLorV1.Match, params)
  }

  /**
   * Get match listing
   * @param puuid
   * @param region
   * @optional queryAmount
   */
  public async getMatchList (puuid: string, region: LorRegions, queryAmount?: MatchLorQueryDto) {
    const params = {
      puuid
    }
    return this.request<string[]>(region, endpointsLorV1.MatchListing, params, true, queryAmount)
  }

  /**
   * Get match listing (with details)
   */
  public async getMatchListWithDetails (puuid: string, region: LorRegions, queryAmount?: MatchLorQueryDto) {
    const params = {
      puuid
    }
    const response: MatchLorDto[] = []
    // Match list
    const {
      response: ids
    } = await this.getMatchList(puuid, region, queryAmount)
    // Load details
    for (const id of ids) {
      const {
        response: match
      } = await this.getMatch(id, region)
      response.push(match)
    }

    return response
  }
}
