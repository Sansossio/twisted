export class MatchTFTQueryDTO {
  /**
   * Number of TFT Matches to list
   */
  count?: number

  /**
   * Ignore the first respective TFT Matches. Defaults to 0.
   */
  start?: number

  /**
   * Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.
   */
  startTime?: number

  /**
   * Epoch timestamp in seconds.
   */
  endTime?: number
}
