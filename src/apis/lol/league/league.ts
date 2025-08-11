import { endpointsV4 } from '../../../endpoints/endpoints'
import { SummonerLeagueDto } from '../../../models-dto/league/summoner-league/summoner-league.dto'
import { LeagueEntryDTO } from '../../../models-dto/league/league-exp/league-entry.dto'
import { Queues, Tiers, Divisions, Regions } from '../../../constants'
import { LeagueListDTO } from '../../../models-dto/league/league-item/league-list.dto'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * League methods
 */
export class LeagueApi extends BaseApiLol {
  /**
   * Get summoner leagues by PUUID
   * @param puuid
   * @param region
   */
  public async byPUUID (puuid: string, region: Regions) {
    const params = {
      summonerPUUID: puuid
    }
    return this.request<SummonerLeagueDto[]>(region, endpointsV4.LeagueByPUUID, params)
  }
  /**
   * @deprecated Use byPUUID instead
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
   * @param page defaults to 1
   */
  public async exp (queue: Queues, tier: Tiers, division: Divisions, region: Regions, page: number = 1) {
    const params = {
      queue,
      tier,
      division
    }
    return this.request<LeagueEntryDTO[]>(region, endpointsV4.LeagueExp, params, false, { page })
  }
  /**
   * League entries
   * @param queue Note that the queue value must be a valid ranked queue.
   * @param tier
   * @param division
   * @param region
   * @param page defaults to 1
   */
  public async entries (queue: Queues, tier: Tiers, division: Divisions, region: Regions, page: number = 1) {
    const params = {
      queue,
      tier,
      division
    }
    return this.request<LeagueEntryDTO[]>(region, endpointsV4.LeagueEntries, params, false, { page })
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
  /**
   * Get grandmaster league by queue
   * @param queue Note that the queue value must be a valid ranked queue.
   * @param region
   */
  public async getGrandMasterLeagueByQueue (queue: Queues, region: Regions) {
    const params = {
      queue
    }
    return this.request<LeagueListDTO>(region, endpointsV4.GrandMasterLeaguesByQueue, params)
  }
  /**
   * Get master league by queue
   * @param queue Note that the queue value must be a valid ranked queue.
   * @param region
   */
  public async getMasterLeagueByQueue (queue: Queues, region: Regions) {
    const params = {
      queue
    }
    return this.request<LeagueListDTO>(region, endpointsV4.MasterLeaguesByQueue, params)
  }
}
