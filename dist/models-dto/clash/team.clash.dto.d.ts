import { ClashPlayerDTO } from './player.clash.dto';
export declare class ClashTeamDto {
    id: string;
    tournamentId: number;
    name: string;
    iconId: number;
    tier: number;
    /**
     * 	Summoner ID of the team captain.
     */
    captain: string;
    abbreviation: string;
    /**
     * Team members.
     */
    players: ClashPlayerDTO[];
}
