export class BannedChampion {
  /**
   * Turn during which the champion was banned.
   */
  pickTurn: number
  /**
   * Banned championId.
   */
  championId: number
  /**
   * The ID of the team that banned the champion
   */
  teamId?: number
}
