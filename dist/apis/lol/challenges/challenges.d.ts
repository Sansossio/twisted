import { Regions } from '../../../constants';
import { Levels } from '../../../constants/levels';
import { BaseApiLol } from '../base/base.api.lol';
import { ConfigDTO } from '../../../models-dto/challenges/config.dto';
import { LeaderboardDTO } from '../../../models-dto/challenges/leaderboard.dto';
import { PercentilesDTO } from '../../../models-dto/challenges/percentiles.dto';
import { ChallengePercentilesDTO } from '../../../models-dto/challenges/challenge-percentiles.dto';
import { PlayerDTO } from '../../../models-dto/challenges/player.dto';
export declare class ChallengesV1Api extends BaseApiLol {
    /**
     * Get all challenge configurations.
     */
    Configs(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ConfigDTO.Config[]>>;
    /**
     * Get all challenge percentile distributions.
     */
    Percentiles(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<PercentilesDTO.Percentiles>>;
    /**
     * Get a challenge configuration.
     */
    ChallengeConfig(challengeId: number, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ConfigDTO.Config>>;
    /**
     * Get Leaderboards for a challenge (Chall, GM, Masters).
     */
    Leaderboards(challengeId: number, level: Levels, region: Regions, query?: {
        limit: number;
    }): Promise<import("../../../models-dto").ApiResponseDTO<LeaderboardDTO.Leaderboard[]>>;
    /**
     * Get a challenge percentile distribution.
     */
    ChallengePercentiles(challengeId: number, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ChallengePercentilesDTO.ChallengePercentile>>;
    /**
     * Get player challenge information.
     */
    PlayerChallenges(puuid: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<PlayerDTO.Player>>;
}
