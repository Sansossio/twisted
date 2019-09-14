import { BaseApi } from './base'
import { MatchListingDto } from '../dto/Match/MatchListing/MatchListing.dto'
import { Regions } from '../enum'
import { endpointsV4 } from '../enum/endpoints'
import { MatchDto } from '../dto/Match/Match/Match.dto'

/**
 * Match methods
 */
export class Matchv4 extends BaseApi {
  public async get (matchId: number, region: Regions): Promise<MatchDto> {
    const params = {
      matchId
    }
    const response = await this.request<MatchDto>(region, endpointsV4.Match, params)
    response.teams = response.teams.map((team) => {
      team.win = (team.win as any) === 'Win'
      return team
    })
    return response
  }
  /**
   * Summoner match listing
   * @param encryptedAccountId Encrypted summoner ID. Max length 63 characters.
   */
  public async list (encryptedAccountId: string, region: Regions): Promise<MatchListingDto> {
    const params = {
      encryptedAccountId
    }
    return this.request(region, endpointsV4.MatchListing, params)
  }
}
