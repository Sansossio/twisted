import { MatchListingDto } from '../../../dto/Match/MatchListing/MatchListing.dto'
import { Regions } from '../../../constants'
import { endpointsV4 } from '../../../endpoints/endpoints'
import { MatchDto } from '../../../dto/Match/Match/Match.dto'
import { MatchTimelineDto } from '../../../dto/Match/MatchTimeLine/MatchTimeLine.dto'
import { MatchQueryDTO } from '../../../dto/Match/Query/MatchQuery.dto'
import { NOT_FOUND } from 'http-status-codes'
import { GenericError } from '../../../errors'
import { ApiResponseDTO } from '../../../dto'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * Match methods
 */
export class MatchApi extends BaseApiLol {
  // Private methods
  generateResponse (error: GenericError): ApiResponseDTO<MatchListingDto> {
    return {
      rateLimits: error.rateLimits,
      response: {
        matches: [],
        startIndex: 0,
        endIndex: 0,
        totalGames: 0
      }
    }
  }
  /**
   * Get match details
   * @param matchId Match id
   * @param region
   */
  public async get (matchId: number, region: Regions) {
    const params = {
      matchId
    }
    const data = await this.request<MatchDto>(region, endpointsV4.Match, params)
    data.response.teams = data.response.teams.map((team) => {
      team.win = (team.win as any) === 'Win'
      return team
    })
    return data
  }
  /**
   * Summoner match listing
   * @param encryptedAccountId Encrypted summoner ID. Max length 63 characters.
   * @param region
   */
  public async list (encryptedAccountId: string, region: Regions, query?: MatchQueryDTO) {
    const params = {
      encryptedAccountId
    }
    try {
      return await this.request<MatchListingDto>(region, endpointsV4.MatchListing, params, false, query)
    } catch (e) {
      if (e.status !== NOT_FOUND) {
        throw e
      }
      return this.generateResponse(e)
    }
  }

  public async timeline (matchId: number, region: Regions) {
    const params = {
      matchId
    }
    return this.request<MatchTimelineDto>(region, endpointsV4.MatchTimeline, params)
  }
}
