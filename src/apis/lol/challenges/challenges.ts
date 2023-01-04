import { Regions, Levels } from '../../../constants'
import { endpointsChallengesV1 } from '../../../endpoints'
import { ChallengeV1DTO } from '../../../models-dto/challenges'
import { ChallengeConfigV1DTO, ChallengeLeaderboardEntryV1DTO, PercentilesV1DTO, ProfileV1DTO } from '../../../models-dto/challenges/playerData.dto'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * Challenges methods
 */
export class ChallengesApi extends BaseApiLol {

  /**
   * Get config
   */
  public async getConfig(region: Regions) {
    return this.request<ChallengeConfigV1DTO[]>(region, endpointsChallengesV1.GetConfig)
  }

  /**
   * Get percentiles
   */
  public async getPercentiles(region: Regions) {
    return this.request<PercentilesV1DTO[]>(region, endpointsChallengesV1.GetPercentiles)
  }

  /**
   * Get getChallengePercentile by challengeId
   * @param challengeId
   */
  public async getChallengeConfig(challengeId: number, region: Regions) {
    const params = {
      challengeId
    }
    return this.request<ChallengeConfigV1DTO>(region, endpointsChallengesV1.GetChallengeConfig, params)
  }

  /**
   * Get Leaderboards By Level
   * @param challengeId
   * @param level rank tier
   */
  public async getLeaderboardsByLevel(challengeId: number, level: Levels, region: Regions) {
    const params = {
      challengeId, level
    }
    return this.request<ChallengeLeaderboardEntryV1DTO>(region, endpointsChallengesV1.GetLeaderboardsByLevel, params)
  }

  /**
   * Get Challenge Percentiles
   * @param challengeId
   */
  public async getChallengePercentiles(challengeId: number, region: Regions) {
    const params = {
      challengeId
    }
    return this.request<PercentilesV1DTO>(region, endpointsChallengesV1.GetChallengePercentiles, params)
  }

  /**
   * Get player data
   * @param puuid
   */
  public async getPlayerData(puuid: string, region: Regions) {
    const params = {
      puuid
    }
    return this.request<ProfileV1DTO>(region, endpointsChallengesV1.GetPlayerData, params)
  }
}
