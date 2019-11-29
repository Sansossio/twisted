import { RateLimitDto } from '../rate-limit/rate-limit.dto'

export class ApiResponseDTO<T> {
  readonly rateLimits?: RateLimitDto
  readonly response: T
}
