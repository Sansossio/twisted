import { Regions } from '../../../constants'
import { Levels } from '../../../constants/levels'
import { endpointsV1 } from '../../../endpoints/endpoints'
import { BaseApiLol } from '../base/base.api.lol'
import { ConfigDTO } from '../../../models-dto/challenges/config.dto'
import { LeaderboardDTO } from '../../../models-dto/challenges/leaderboard.dto'
import { PercentilesDTO } from '../../../models-dto/challenges/percentiles.dto'
import { ChallengePercentilesDTO } from '../../../models-dto/challenges/challenge-percentiles.dto'
import { PlayerDTO } from '../../../models-dto/challenges/player.dto'

export class ChallengesV1Api extends BaseApiLol {

   /** 
    * Get Config
    */
   public async Configs (region: Regions) {
      return this.request<ConfigDTO.Config[]>(region, endpointsV1.Config)
   }
   /**
    * Get Percentiles
    */
   public async Percentiles (region: Regions) {
      return this.request<PercentilesDTO.Percentiles>(region, endpointsV1.Percentiles)
   }

   /**
    * Get Challenge Config
    */
   public async ChallengeConfig (challengeId: number, region: Regions) {
      const params = {
         challengeId
      }
      return this.request<ConfigDTO.Config>(region, endpointsV1.ChallengeConfig, params)
   }
   
   /**
    * Get Challenge Config
    */
   public async Leaderboards (challengeId: number, level: Levels, region: Regions, query?: {limit: number}) {
      const params = {
         challengeId,
         level
      }
      return this.request<LeaderboardDTO.Leaderboard[]>(region, endpointsV1.Leaderboards, params, false, query) 
   }

   /**
    * Get Challenge Percentiles
    */
   public async ChallengePercentiles (challengeId: number, region: Regions) {
      const params = {
         challengeId
      }
      return this.request<ChallengePercentilesDTO.ChallengePercentile>(region, endpointsV1.ChallengePercentiles, params) 
   }

   /**
    * Get Player Challenges
    */
   public async PlayerChallenges (puuid: string, region: Regions) {
      const params = {
         summonerPUUID: puuid
      }
      return this.request<PlayerDTO.Player>(region, endpointsV1.PlayerChallenges, params)
   }
}