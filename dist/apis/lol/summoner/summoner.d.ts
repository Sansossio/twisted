import { SummonerV4DTO } from '../../../models-dto/summoners/summoner.dto';
import { Regions } from '../../../constants';
import { BaseApiLol } from '../base/base.api.lol';
/**
 * Summoner methods
 */
export declare class SummonerApi extends BaseApiLol {
    private parsePath;
    private genericRequest;
    /**
     * Get by name
     * @param summonerName Summoner name
     * @param region Riot region
     */
    getByName(summonerName: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<SummonerV4DTO>>;
    /**
     * Get by id
     * @param id Summoner id
     * @param region Riot region
     */
    getById(id: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<SummonerV4DTO>>;
    /**
     * Get by PUUID
     * @param puuid
     * @param region Riot region
     */
    getByPUUID(puuid: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<SummonerV4DTO>>;
    /**
     * Get by PUUID
     * @param puuid
     * @param region Riot region
     */
    getByAccountID(accountId: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<SummonerV4DTO>>;
}
