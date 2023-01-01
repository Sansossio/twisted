/**
 * Challenge basic info
 */
export class ChallengeV1DTO {
    /**
     * ID of the challenge.
     */
  public readonly challengeId: number
    /**
     * Percentile of the challenge.
     */
  public readonly percentile: number
    /**
     * Level of the challenge.
     */
  public readonly level: string
    /**
     * Value of the challenge.
     */
  public readonly value: number
    /**
     * Time when the challenge was achieved, specified as epoch milliseconds.
     */
  public readonly achievedTime: number
    /**
     * Optional: position of the challenge.
     */
  public readonly position?: number
    /**
     * Optional: number of players in the challenge's level.
     */
  public readonly playersInLevel?: number
}
