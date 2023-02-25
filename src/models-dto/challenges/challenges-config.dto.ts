/** 
 * Challenges
 */

export namespace ChallengeConfigDTO {
   export interface Config {
      id: number,
      localizedNames: localizedNames
      state?: string,
      tracking?: string,
      startTimestamp: number
      endTimestamp: number,
      leaderboard: boolean,
      thresholds: thresholdsDto
   }
   
   // export class ChallengesV1DTOs {
   //    public readonly id: number
   //    public readonly localizedNames: localizedNames
   //    public readonly state?: string
   //    public readonly tracking?: string
   //    public readonly startTimestamp: number
   //    public readonly endTimestamp: number
   //    public readonly leaderboard: boolean
   //    public readonly thresholds: thresholdsDto
   // }
   
   export interface thresholdsDto {
      [key: string]: number
   }
   
   export interface localizedNames {
      [key: string]: localizedName
   }
   
   export interface localizedName {
      description: string,
      name: string,
      shortDescription: string
   }
}
