export interface IParams {
  [key: string]: string | number
}

export interface IBaseApiParams {
  /**
   * If api response is 429 (rate limits) try reattempt after needed time (default true)
   */
  rateLimitRetry?: boolean
  /**
   * Number of time to retry after rate limit response (default 1)
   */
  rateLimitRetryAttempts?: number
  /**
   * Riot games api key
   */
  key?: string,
  /**
   * Time methods logger (default true)
   */
  logTime?: boolean
}

export function waiter (ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
