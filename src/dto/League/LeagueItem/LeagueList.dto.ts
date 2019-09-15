import { LeagueItemDTO } from './LeagueItem.dto'

export class LeagueListDTO {
  leagueId: string
  tier: string
  entries: LeagueItemDTO[]
  queue: string
  name: string
}
