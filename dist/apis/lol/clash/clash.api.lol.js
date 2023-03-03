"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClashApi = void 0;
const base_api_lol_1 = require("../base/base.api.lol");
const endpoints_1 = require("../../../endpoints");
/**
 * Clash api methods
 */
class ClashApi extends base_api_lol_1.BaseApiLol {
    /**
     * This endpoint returns a list of active Clash players for a given summoner ID. If a summoner registers for multiple tournaments at the same time (e.g., Saturday and Sunday) then both registrations would appear in this list.
     * @param region
     * @param summonerId Encrypted summoner id
     */
    playersList(encryptedSummonerId, region) {
        return this.request(region, endpoints_1.endpointsClashV1.GetPlayers, { encryptedSummonerId });
    }
    /**
     * Get team by id
     * @param region
     * @param teamId Team id
     */
    getTeamById(teamId, region) {
        return this.request(region, endpoints_1.endpointsClashV1.GetTeam, { teamId });
    }
    /**
     * Returns a list of active and upcoming tournaments.
     * @param region
     */
    getTournaments(region) {
        return this.request(region, endpoints_1.endpointsClashV1.GetTournaments);
    }
    /**
     * Get team tournament
     */
    getTeamTournament(teamId, region) {
        return this.request(region, endpoints_1.endpointsClashV1.GetTournamentByTeamId, { teamId });
    }
    /**
     * Get tournament by id
     */
    getTournamentById(tournamentId, region) {
        return this.request(region, endpoints_1.endpointsClashV1.GetTournamentById, { tournamentId });
    }
}
exports.ClashApi = ClashApi;
