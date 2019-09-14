import { BaseApi } from './base'
import { MatchListingDto } from '../dto/Match/MatchListing/MatchListing.dto'
import { Regions } from '../enum'
import { endpointsV4 } from '../enum/endpoints'

/**
 * Match methods
 */
export class Matchv4 extends BaseApi {
  /**
   * Summoner match listing
   * @param encryptedAccountId Encrypted summoner ID. Max length 63 characters.
   */
  public async matchList (encryptedAccountId: string, region: Regions): Promise<MatchListingDto> {
    const params = {
      encryptedAccountId
    }
    return this.request(region, endpointsV4.MatchListing, params)
  }
}
