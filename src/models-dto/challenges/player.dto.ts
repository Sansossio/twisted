export namespace PlayerDTO {
   export interface Player {
      /** All challenges for a player. */
      challenges: Challenge[]

      preferences: Preferences

      /** Summed points. */
      totalPoints: TotalPoints

      /** Information for each category. */
      categoryPoints: CategoryPoints
   }

   export interface Challenge {
      challengeId: number,
      percentile: number,
      level: string,
      value: number
      achievedTime: number
   }

   export interface Preferences {
      bannerAccent: string,
      title: string,
      challengeIds: number[]
   }

   export interface TotalPoints {
      level: string,
      current: number,
      max: number,
      percentile?: number
   }

   export interface CategoryPoints {
      [key: string]: TotalPoints
   }
}