import { NOT_FOUND } from 'http-status-codes'
import { Regions } from '../../../constants'
import { FeaturedGamesDTO } from '../../../models-dto/spectator/featured-games.dto'
import { endpointsV4 } from '../../../endpoints/endpoints'
import { CurrentGameInfoDTO } from '../../../models-dto/spectator/current-game-info.dto'
import { SpectatorNotAvailableDTO } from '../../../models-dto/spectator/spectator-not-available.dto'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * @deprecated Use SpectatorV5Api instead
 * Spectator methods
 */
export class SpectatorApi extends BaseApiLol {
  private errorHandler (e: any) {
    const { statusCode } = e.error || e
    if (statusCode !== NOT_FOUND) {
      throw e
    }
  }
  /**
   * Get featured games
   * @param region
   */
  public async featuredGames (region: Regions) {
    return this.request<FeaturedGamesDTO>(region, endpointsV4.SpectatorFeaturedGames)
  }
  /**
   * Get summoner active game
   * @param encryptedSummonerId
   * @param region
   */
  public async activeGame (encryptedSummonerId: string, region: Regions) {
    const params = {
      encryptedSummonerId
    }
    try {
      return await this.request<CurrentGameInfoDTO>(region, endpointsV4.SpectatorSummoner, params)
    } catch (e) {
      this.errorHandler(e)
      const message = 'No active game found'
      const response: SpectatorNotAvailableDTO = {
        message
      }
      return response
    }
  }
}
