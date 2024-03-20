import { FeaturedGameInfo } from './featured-game-info.dto'

export class FeaturedGamesDTO {
  /**
   * The list of featured games
   */
  gameList: FeaturedGameInfo[]
  /**
   * The suggested interval to wait before requesting FeaturedGames again
   */
  clientRefreshInterval: number
}
