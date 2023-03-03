import { Regions } from '../../../constants';
import { ChampionMasteryDTO } from '../../../models-dto/champion/champion-mastery.dto';
import { ChampionsScoreDTO } from '../../../models-dto/champion/champions-score.dto';
import { BaseApiLol } from '../base/base.api.lol';
/**
 * Third party methods
 */
export declare class ChampionApi extends BaseApiLol {
    /**
     * Get champion rotation
     * @param region Riot region
     */
    rotation(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<unknown>>;
    /**
     * Champion mastery by summoner
     * @param encryptedSummonerId
     * @param region
     */
    masteryBySummoner(encryptedSummonerId: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ChampionMasteryDTO[]>>;
    /**
     * Champion mastery by summoner
     * @param encryptedSummonerId
     * @param region
     */
    masteryBySummonerChampion(encryptedSummonerId: string, championId: number, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ChampionMasteryDTO>>;
    /**
     * Champions mastery score
     * @param encryptedSummonerId
     * @param region
     */
    championsScore(encryptedSummonerId: string, region: Regions): Promise<ChampionsScoreDTO>;
}
