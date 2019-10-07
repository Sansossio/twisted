import { BaseApi } from '../base'
import { MatchListingDto } from '../../dto/Match/MatchListing/MatchListing.dto'
import { Regions } from '../../constants'
import { endpointsV4 } from '../../endpoints/endpoints'
import { MatchDto } from '../../dto/Match/Match/Match.dto'
import { MatchTimelineDto } from '../../dto/Match/MatchTimeLine/MatchTimeLine.dto'

/**
 * Match methods
 */
export class MatchApi extends BaseApi {
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
  public async list (encryptedAccountId: string, region: Regions) {
    const params = {
      encryptedAccountId
    }
    return this.request<MatchListingDto>(region, endpointsV4.MatchListing, params)
  }

  public async timeline (matchId: number, region: Regions) {
    const params = {
      matchId
    }
    return this.request<MatchTimelineDto>(region, endpointsV4.MatchTimeline, params)
  }
}
