import { Regions } from '../../../constants';
import { FeaturedGamesDTO } from '../../../models-dto/spectator/featured-games.dto';
import { CurrentGameInfoDTO } from '../../../models-dto/spectator/current-game-info.dto';
import { SpectatorNotAvailableDTO } from '../../../models-dto/spectator/spectator-not-available.dto';
import { BaseApiLol } from '../base/base.api.lol';
export declare class SpectatorApi extends BaseApiLol {
    private errorHandler;
    /**
     * Get featured games
     * @param region
     */
    featuredGames(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<FeaturedGamesDTO>>;
    /**
     * Get summoner active game
     * @param encryptedSummonerId
     * @param region
     */
    activeGame(encryptedSummonerId: string, region: Regions): Promise<SpectatorNotAvailableDTO | import("../../../models-dto").ApiResponseDTO<CurrentGameInfoDTO>>;
}
