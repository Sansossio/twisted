import { BaseApi } from '../base'
import { Regions } from '../../enum'
import { FeaturedGamesDTO } from '../../dto/Spector/FeaturedGames.dto'
import { endpointsV4 } from '../../enum/endpoints.enum'

export class SpectorApi extends BaseApi {
  /**
   * Get featured games
   * @param region
   */
  public async featuredGames (region: Regions) {
    return this.request<FeaturedGamesDTO>(region, endpointsV4.SpectorFeaturedGames)
  }
}
