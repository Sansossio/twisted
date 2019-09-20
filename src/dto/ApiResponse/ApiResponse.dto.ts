import { RateLimitDto } from '../RateLimit/RateLimit.dto'

export class ApiResponseDTO<T> {
  readonly rateLimits?: RateLimitDto
  readonly response: T
}
