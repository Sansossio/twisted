import { MatchListingDto } from '../../../models-dto/matches/match-listing/match-listing.dto';
import { Regions } from '../../../constants';
import { MatchDto } from '../../../models-dto/matches/match/match.dto';
import { MatchTimelineDto } from '../../../models-dto/matches/match-timeline/match-timeline.dto';
import { MatchQueryDTO } from '../../../models-dto/matches/query/match-query.dto';
import { ApiResponseDTO } from '../../../models-dto';
import { BaseApiLol } from '../base/base.api.lol';
/**
 * Match methods
 */
export declare class MatchApi extends BaseApiLol {
    private generateResponse;
    private map;
    /**
     * Get match details
     * @param matchId Match id
     * @param region
     * @deprecated
     */
    get(matchId: number, region: Regions): Promise<ApiResponseDTO<MatchDto>>;
    /**
     * Summoner match listing
     * @param encryptedAccountId Encrypted summoner ID. Max length 63 characters.
     * @param region
     * @deprecated
     */
    list(encryptedAccountId: string, region: Regions, query?: MatchQueryDTO): Promise<ApiResponseDTO<MatchListingDto>>;
    /**
     * Timeline
     * @param matchId
     * @param region
     * @deprecated
     */
    timeline(matchId: number, region: Regions): Promise<ApiResponseDTO<MatchTimelineDto>>;
}
