export namespace PlayerDTO {
   export interface Player {
      challenges: Challenge[]
      preferences: Preference
      totalPoints: TotalPoints
      categoryPoints: CategoryPoints
   }

   export interface Challenge {
      challengeId: number,
      percentile: number,
      level: string,
      value: number
      achievedTime: number
   }

   export interface Preference {
      bannerAccent: string,
      title: string,
      challengeIds: number[]
   }

   export interface TotalPoints {
      level: string,
      current: number,
      max: number,
      percentile: number
   }

   export interface CategoryPoints {
      [key: string]: TotalPoints
   }
}