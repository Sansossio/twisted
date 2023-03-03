import { MatchDto } from '../../../models-dto/matches/match/match.dto';
export declare class SeedApi {
    private readonly baseUrl;
    private request;
    matches(id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10): Promise<{
        matches: MatchDto[];
    }>;
}
