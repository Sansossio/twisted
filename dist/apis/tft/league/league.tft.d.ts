import { Regions } from '../../../constants';
import { BaseApiTft } from '../base/base.api.tft';
import { LeagueEntryDTO } from '../../../models-dto/league/tft-league';
import { LeagueListDTO } from '../../../models-dto';
export declare class LeagueTFTApi extends BaseApiTft {
    /**
     * Get league entries for a given summoner ID
     * @param encryptedSummonerId
     * @param region
     */
    get(encryptedSummonerId: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LeagueEntryDTO[]>>;
    /**
     * Get the master league
     * @param region
     */
    getMasterLeague(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LeagueListDTO>>;
    /**
     * Get the grandmaster league
     * @param region
     */
    getGrandMasterLeague(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LeagueListDTO>>;
    /**
     * Get the challenger league
     * @param region
     */
    getChallengerLeague(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<LeagueListDTO>>;
}
