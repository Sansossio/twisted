/**
 * Summoner basic info
 */
export class SummonerV4DTO {
  /**
   * ID of the summoner icon associated with the summoner.
   */
  public readonly profileIconId: number
  /**
   * Summoner name
   */
  public readonly name: string
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
   *  Encrypted summoner ID. Max length 63 characters.
   */
  public readonly id: string
  /**
   * Encrypted account ID. Max length 56 characters.
   */
  public readonly accountId: string
}
