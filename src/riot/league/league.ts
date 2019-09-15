import { BaseApi } from '../base'
import { Regions } from '../../enum'
import { endpointsV4 } from '../../enum/endpoints.enum'
import { SummonerLeagueDto } from '../../dto/League/SummonerLeague/SummonerLeague.dto'
import { LeagueEntryDTO } from '../../dto/League/LeagueExp/LeagueEntry.dto'
import { Queues, Tiers, Divisions } from '../../constants'
import { LeagueListDTO } from '../../dto/League/LeagueItem/LeagueList.dto'

/**
 * League methods
 */
export class LeagueApi extends BaseApi {
  /**
   * Get summoner leagues
   * @param encryptedSummonerId Encrypted summoner ID. Max length 63 characters.
   * @param region
   */
  public async bySummoner (encryptedSummonerId: string, region: Regions) {
    const params = {
      encryptedSummonerId
    }
    return this.request<SummonerLeagueDto[]>(region, endpointsV4.SummonerLeague, params)
  }
  /**
   * Top league exp
   * @param queue Note that the queue value must be a valid ranked queue.
   * @param tier
   * @param division
   * @param region
   */
  public async exp (queue: Queues, tier: Tiers, division: Divisions, region: Regions) {
    const params = {
      queue,
      tier,
      division
    }
    return this.request<LeagueEntryDTO>(region, endpointsV4.LeagueExp, params)
  }
  /**
   * League entries
   * @param queue Note that the queue value must be a valid ranked queue.
   * @param tier
   * @param division
   * @param region
   */
  public async entries (queue: Queues, tier: Tiers, division: Divisions, region: Regions) {
    const params = {
      queue,
      tier,
      division
    }
    return this.request<LeagueEntryDTO>(region, endpointsV4.LeagueEntries, params)
  }
  /**
   * Get league by id
   * @param leagueId
   * @param region
   */
  public async get (leagueId: string, region: Regions) {
    const params = {
      leagueId
    }
    return this.request<LeagueListDTO>(region, endpointsV4.League, params)
  }
  /**
   * Get challenger league by queue
   * @param queue Note that the queue value must be a valid ranked queue.
   * @param region
   */
  public async getChallengerLeaguesByQueue (queue: Queues, region: Regions) {
    const params = {
      queue
    }
    return this.request<LeagueListDTO>(region, endpointsV4.ChallengerLeaguesByQueue, params)
  }
}
