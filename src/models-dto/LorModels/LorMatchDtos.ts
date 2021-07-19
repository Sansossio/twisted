export class InfoDto {
  // Game mode
  readonly game_mode: string
  // Game type (Ranked, Normal, AI, Tutorial, VanillaTrial, Singleton, StandardGauntlet. Can be "")
  readonly game_type: string
  // Match start time in UTC.
  readonly game_start_time_utc: string
  // Game Version
  readonly game_version: string
  // Players
  readonly players: PlayerDto[]
  // Total turn count of match
  readonly total_turn_count: number
}

export interface MatchLorQueryDto {
  // Matches to list
  count?: number
}

export class MatchLorDto {
  // Match info
  readonly info: InfoDto
  // Match metadata
  readonly metadata: MetadataDto
}

export class MetadataDto {
  // Match data version
  readonly data_version: string
  // A list of encrypted participant PUUIDs
  readonly participants: string[]
  // Match id
  readonly match_id: string
}

export class PlayerDto {
  // PUUID of player
  readonly puuid: string
  // Decks ID
  readonly deck_id: string
  // Shareable Deck Code
  readonly deck_code: string
  // Factions of deck
  readonly factions: string[]
  // Result of match. ("win" or "loss")
  readonly game_outcome: string
  // Indictates which player started. 0 is starting, 1 is second.
  readonly order_of_play: number
}

