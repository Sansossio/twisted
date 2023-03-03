import { RegionGroups } from '../../../constants';
import { ApiResponseDTO } from '../../../models-dto';
import { MatchV5DTOs, MatchV5TimelineDTOs } from '../../../models-dto/matches/match-v5';
import { MatchQueryV5DTO } from '../../../models-dto/matches/query-v5';
import { BaseApiLol } from '../base/base.api.lol';
/**
 * Match methods
 */
export declare class MatchV5Api extends BaseApiLol {
    private generateResponse;
    /**
     * Get match details
     * @param matchId Match id
     * @param region
     */
    get(matchId: string, region: RegionGroups): Promise<ApiResponseDTO<MatchV5DTOs.MatchDto>>;
    /**
     * Summoner match listing
     * @param puuid Puuid
     * @param region
     * @returns A list of match ids
     */
    list(puuid: string, region: RegionGroups, query?: MatchQueryV5DTO): Promise<ApiResponseDTO<string[]>>;
    timeline(matchId: string, region: RegionGroups): Promise<ApiResponseDTO<MatchV5TimelineDTOs.MatchTimelineDto>>;
}
