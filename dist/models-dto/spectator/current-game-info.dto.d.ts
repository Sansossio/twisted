import { BannedChampion } from '../matches/match/match-teams-bans.dto';
import { ObserverDTO } from './observer.dto';
import { CurrentGameParticipantDTO } from './current-game-participant.dto';
export declare class CurrentGameInfoDTO {
    /**
     * The ID of the game
     */
    gameId: number;
    /**
     * The game start time represented in epoch milliseconds
     */
    gameStartTime: number;
    /**
     * The ID of the platform on which the game is being played
     */
    platformId: string;
    /**
     * The game mode
     */
    gameMode: string;
    /**
     * The ID of the map
     */
    mapId: number;
    /**
     * The game type
     */
    gameType: string;
    /**
     * Banned champion information
     */
    bannedChampions: BannedChampion[];
    /**
     * The observer information
     */
    observers: ObserverDTO;
    /**
     * The participant information
     */
    participants: CurrentGameParticipantDTO[];
    /**
     * The amount of time in seconds that has passed since the game started
     */
    gameLength: number;
    /**
     * The queue type (queue types are documented on the Game Constants page)
     */
    gameQueueConfigId: number;
}
