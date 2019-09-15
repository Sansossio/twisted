import { BaseApi } from '../base'
import { Regions } from '../../enum'
import { FeaturedGamesDTO } from '../../dto/Spectator/FeaturedGames.dto'
import { endpointsV4 } from '../../enum/endpoints.enum'

export class SpectatorApi extends BaseApi {
  /**
   * Get featured games
   * @param region
   */
  public async featuredGames (region: Regions) {
    return this.request<FeaturedGamesDTO>(region, endpointsV4.SpectatorFeaturedGames)
  }
}
