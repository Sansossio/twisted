/** 
 * Challenges
 */
export namespace ConfigDTO {
   export interface Config {
      /** Capstone & challenge id */
      id: number,

      /** Language metadata for challenge. */
      localizedNames: localizedNames

      state?: string,

      tracking?: string,

      /** Unix timestamp. */
      startTimestamp?: number
      endTimestamp?: number,

      /** Leaderboard tracking. */
      leaderboard: boolean,

      /** Level demarcation. */
      thresholds: thresholdsDto
   }
   
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
