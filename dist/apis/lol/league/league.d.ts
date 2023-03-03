import { SummonerLeagueDto } from '../../../models-dto/league/summoner-league/summoner-league.dto';
import { LeagueEntryDTO } from '../../../models-dto/league/league-exp/league-entry.dto';
import { Queues, Tiers, Divisions, Regions } from '../../../constants';
import { LeagueListDTO } from '../../../models-dto/league/league-item/league-list.dto';
import { BaseApiLol } from '../base/base.api.lol';
/**
 * League methods
 */
export declare class LeagueApi extends BaseApiLol {
    /**
     * Get summoner leagues
     * @param encryptedSummonerId Encrypted summoner ID. Max length 63 characters.
     * @param region
     */
    bySummoner(encryptedSummonerId: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<SummonerLeagueDto[]>>;
    /**
     * Top league exp
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param tier
     * @param division
     * @param region
     */
    exp(queue: Queues, tier: Tiers, division: Divisions, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LeagueEntryDTO>>;
    /**
     * League entries
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param tier
     * @param division
     * @param region
     * @param page defaults to 1
     */
    entries(queue: Queues, tier: Tiers, division: Divisions, region: Regions, page?: number): Promise<import("../../../models-dto").ApiResponseDTO<LeagueEntryDTO>>;
    /**
     * Get league by id
     * @param leagueId
     * @param region
     */
    get(leagueId: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LeagueListDTO>>;
    /**
     * Get challenger league by queue
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param region
     */
    getChallengerLeaguesByQueue(queue: Queues, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LeagueListDTO>>;
    /**
     * Get grandmaster league by queue
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param region
     */
    getGrandMasterLeagueByQueue(queue: Queues, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LeagueListDTO>>;
    /**
     * Get master league by queue
     * @param queue Note that the queue value must be a valid ranked queue.
     * @param region
     */
    getMasterLeagueByQueue(queue: Queues, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LeagueListDTO>>;
}
