import { BaseApiLol } from '../base/base.api.lol';
import { ClashPlayerDTO } from '../../../models-dto/clash/player.clash.dto';
import { Regions } from '../../../constants';
import { ClashTeamDto } from '../../../models-dto/clash/team.clash.dto';
import { TournamentClashDTO } from '../../../models-dto/clash/tournament/tournament.clash.dto';
/**
 * Clash api methods
 */
export declare class ClashApi extends BaseApiLol {
    /**
     * This endpoint returns a list of active Clash players for a given summoner ID. If a summoner registers for multiple tournaments at the same time (e.g., Saturday and Sunday) then both registrations would appear in this list.
     * @param region
     * @param summonerId Encrypted summoner id
     */
    playersList(encryptedSummonerId: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ClashPlayerDTO[]>>;
    /**
     * Get team by id
     * @param region
     * @param teamId Team id
     */
    getTeamById(teamId: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<ClashTeamDto>>;
    /**
     * Returns a list of active and upcoming tournaments.
     * @param region
     */
    getTournaments(region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<TournamentClashDTO[]>>;
    /**
     * Get team tournament
     */
    getTeamTournament(teamId: string, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<TournamentClashDTO>>;
    /**
     * Get tournament by id
     */
    getTournamentById(tournamentId: string | number, region: Regions): Promise<import("../../../models-dto").ApiResponseDTO<TournamentClashDTO>>;
}
