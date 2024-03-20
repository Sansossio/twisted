import { Regions } from '../../../constants'
import { BaseApiTft } from '../base/base.api.tft'
import { CurrentGameInfoTFTDTO } from '../../../models-dto/spectator/tft-spectator/current-game-info-tft.dto'
import { FeaturedGamesTFTDTO } from '../../../models-dto/spectator/tft-spectator/featured-games-tft.dto'
import { endpointsTFTV5 } from '../../../endpoints'
import { BaseApiGames } from '../../../base/base.const'

export class SpectatorTFTV5Api extends BaseApiTft {
  protected readonly game: BaseApiGames = BaseApiGames.LOL
  /** 
   * Get active games
   * @param puuid
   * @param region
   */
  public async activeGame(puuid: string, region: Regions) {
    const params = {
      encryptedPUUID: puuid
    }
     return this.request<CurrentGameInfoTFTDTO>(region, endpointsTFTV5.SpectateSummoner, params)
  }

  /**
   * Get featured games
   * @param region
   */
  public async featuredGames(region: Regions) {
     return this.request<FeaturedGamesTFTDTO>(region, endpointsTFTV5.SpectatorFeaturedGames)
  }
}