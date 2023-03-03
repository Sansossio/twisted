import { PlayerPositionClashEnum, PlayerRoleClashEnum } from './enum/enum.clash';
/**
 * Generic player dto
 */
export declare class ClashPlayerDTO {
    /**
     * Encrypted summoner id
     */
    summonerId: string;
    /**
     * Team id
     */
    teamId?: string;
    /**
     * Player position (Legal values: UNSELECTED, FILL, TOP, JUNGLE, MIDDLE, BOTTOM, UTILITY)
     */
    position: PlayerPositionClashEnum;
    /**
     * Player role (Legal values: CAPTAIN, MEMBER)
     */
    role: PlayerRoleClashEnum;
}
