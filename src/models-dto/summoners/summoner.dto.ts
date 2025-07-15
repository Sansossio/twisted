/**
 * Summoner basic info
 */
export class SummonerV4DTO {
  /**
   * ID of the summoner icon associated with the summoner.
   */
  public readonly profileIconId: number
  /**
   * Encrypted PUUID. Exact length of 78 characters.
   */
  public readonly puuid: string
  /**
   * Summoner level associated with the summoner.
   */
  public readonly summonerLevel: number
  /**
   * Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change
   */
  public readonly revisionDate: number
  /**
   * @deprecated use puuid instead
   * Encrypted summoner ID. Max length 63 characters.
   */
  public readonly id: string
  /**
   * @deprecated account ID is not present anymore
   * Encrypted account ID. Max length 56 characters.
   */
  public readonly accountId: string
}
