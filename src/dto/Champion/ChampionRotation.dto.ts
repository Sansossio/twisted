/**
 * Champion free rotation response object
 */
export class ChampionRotationV3DTO {
  /**
   * Champions id list for new players
   */
  public readonly freeChampionIdsForNewPlayers: Number[]
  /**
   * Champions id list
   */
  public readonly freeChampionIds: Number[]
  /**
   * Max level to get new players rotation
   */
  public readonly maxNewPlayerLevel: Number[]
}
