/**
 * Champion free rotation response object
 */
export class ChampionRotationV3DTO {
  /**
   * Champions id list for new players
   */
  public readonly freeChampionIdsForNewPlayers: number[]
  /**
   * Champions id list
   */
  public readonly freeChampionIds: number[]
  /**
   * Max level to get new players rotation
   */
  public readonly maxNewPlayerLevel: number[]
}
