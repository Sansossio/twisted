/**
 * Champion free rotation response object
 */
export declare class ChampionRotationV3DTO {
    /**
     * Champions id list for new players
     */
    readonly freeChampionIdsForNewPlayers: number[];
    /**
     * Champions id list
     */
    readonly freeChampionIds: number[];
    /**
     * Max level to get new players rotation
     */
    readonly maxNewPlayerLevel: number[];
}
