export class RankedLorDto {
  // Player Info
  readonly players: PlayerDto[]
}

export class PlayerDto {
  // Player name
  readonly name: string
  // Rank on leaderboard
  readonly rank: number
  // Legaue Points
  readonly lp: number
}