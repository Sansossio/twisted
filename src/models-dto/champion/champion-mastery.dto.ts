export class ChampionMasteryDTO {
  /**
   * Is chest granted for this champion or not in current season.
   */
  chestGranted: boolean
  /**
   * Champion level for specified player and champion combination.
   */
  championLevel: number
  /**
   * Total number of champion points for this player and champion combination - they are used to determine championLevel.
   */
  championPoints: number
  /**
   * Champion ID for this entry.
   */
  championId: number
  /**
   * Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
   */
  championPointsUntilNextLevel: number
  /**
   * Last time this champion was played by this player - in Unix milliseconds time format.
   */
  lastPlayTime: number
  /**
   * The token earned for this champion to levelup.
   */
  tokensEarned: number
  /**
   * Number of points earned since current level has been achieved.
   */
  championPointsSinceLastLevel: number
  /**
   * Summoner ID for this entry. (Encrypted)
   */
  summonerId: string
}
