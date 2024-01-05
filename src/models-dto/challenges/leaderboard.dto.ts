// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LeaderboardDTO {
   export interface Leaderboard {
      /** Summoner puuid. */
      puuid: string,

      /** Challenge value. */
      value: number,

      /** Rank on leaderboard for particular challenge and rank (limited to Chall, GM, Masters). */
      position: number
   }
}