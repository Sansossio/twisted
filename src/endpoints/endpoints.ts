export interface IEndpoint {
  path: string
  version: number
  prefix: string
}

interface IEndpoints {
  [key: string]: IEndpoint
}

export const endpointsV5: IEndpoints = {
  MatchListing: {
    path: 'matches/by-puuid/$(summonerPUUID)/ids',
    prefix: 'match',
    version: 5
  },
  Match: {
    path: 'matches/$(matchId)',
    prefix: 'match',
    version: 5
  },
  MatchTimeline: {
    path: 'matches/$(matchId)/timeline',
    prefix: 'match',
    version: 5
  },
  SpectatorFeaturedGames: {
    path: 'featured-games',
    prefix: 'spectator',
    version: 5
  },
  SpectatorSummoner: {
    path: 'active-games/by-summoner/$(summonerPUUID)',
    prefix: 'spectator',
    version: 5
  }
}

export const endpointsV4: IEndpoints = {
  LolStatus: {
    path: 'platform-data',
    prefix: 'status',
    version: 4
  },
  Summoner: {
    path: 'summoners/$(by)/$(summonerName)',
    prefix: 'summoner',
    version: 4
  },
  LeagueByPUUID: {
    path: 'entries/by-puuid/$(summonerPUUID)',
    prefix: 'league',
    version: 4
  },
  SummonerLeague: {
    path: 'entries/by-summoner/$(encryptedSummonerId)',
    prefix: 'league',
    version: 4
  },
  MatchListing: {
    path: 'matchlists/by-account/$(encryptedAccountId)',
    prefix: 'match',
    version: 4
  },
  Match: {
    path: 'matches/$(matchId)',
    prefix: 'match',
    version: 4
  },
  MatchTimeline: {
    path: 'timelines/by-match/$(matchId)',
    prefix: 'match',
    version: 4
  },
  League: {
    path: 'leagues/$(leagueId)',
    prefix: 'league',
    version: 4
  },
  ChallengerLeaguesByQueue: {
    path: 'challengerleagues/by-queue/$(queue)',
    prefix: 'league',
    version: 4
  },
  GrandMasterLeaguesByQueue: {
    path: 'grandmasterleagues/by-queue/$(queue)',
    prefix: 'league',
    version: 4
  },
  MasterLeaguesByQueue: {
    path: 'masterleagues/by-queue/$(queue)',
    prefix: 'league',
    version: 4
  },
  LeagueEntries: {
    path: 'entries/$(queue)/$(tier)/$(division)',
    prefix: 'league',
    version: 4
  },
  LeagueExp: {
    path: 'entries/$(queue)/$(tier)/$(division)',
    prefix: 'league-exp',
    version: 4
  },
  ThirdPartyCode: {
    path: 'third-party-code/by-summoner/$(encryptedSummonerId)',
    prefix: 'platform',
    version: 4
  },
  ChampionMasteryByPUUID: {
    path: 'champion-masteries/by-puuid/$(summonerPUUID)',
    prefix: 'champion-mastery',
    version: 4
  },
  ChampionMasteryByPUUIDChampion: {
    path: 'champion-masteries/by-puuid/$(summonerPUUID)/by-champion/$(championId)',
    prefix: 'champion-mastery',
    version: 4
  },
  ChampionsScore: {
    path: 'scores/by-puuid/$(summonerPUUID)',
    prefix: 'champion-mastery',
    version: 4
  },
  SpectatorFeaturedGames: {
    path: 'featured-games',
    prefix: 'spectator',
    version: 4
  },
  SpectatorSummoner: {
    path: 'active-games/by-summoner/$(encryptedSummonerId)',
    prefix: 'spectator',
    version: 4
  }
}

export const endpointsV3: IEndpoints = {
  ChampionRotation: {
    path: 'champion-rotations',
    prefix: 'platform',
    version: 3
  },
  LolStatus: {
    path: 'shard-data',
    prefix: 'status',
    version: 3
  }
}

export const endpointsTFTV5: IEndpoints = {
  SpectateSummoner: {
    path: 'active-games/by-puuid/$(encryptedPUUID)',
    prefix: 'spectator/tft',
    version: 5
  },
  SpectatorFeaturedGames: {
    path: 'featured-games',
    prefix: 'spectator/tft',
    version: 5
  }
}

export const endpointsTFTV1: IEndpoints = {
  Match: {
    path: 'matches/$(matchId)',
    prefix: 'match',
    version: 1
  },

  MatchListing: {
    path: 'matches/by-puuid/$(summonerPUUID)/ids',
    prefix: 'match',
    version: 1
  },

  Summoner: {
    path: 'summoners/$(by)/$(summonerName)',
    prefix: 'summoner',
    version: 1
  },

  LeagueMaster: {
    path: 'master',
    prefix: 'league',
    version: 1
  },

  LeagueGrandMaster: {
    path: 'grandmaster',
    prefix: 'league',
    version: 1
  },

  LeagueChallenger: {
    path: 'challenger',
    prefix: 'league',
    version: 1
  },

  LeagueBySummoner: {
    path: 'by-summoner/$(encryptedSummonerId)',
    prefix: 'league',
    version: 1
  },

  LeagueByPuuid: {
    path: 'by-puuid/$(puuid)',
    prefix: 'league',
    version: 1
  },

  LeagueByTierDivision: {
    path: 'entries/$(tier)/$(division)',
    prefix: 'league',
    version: 1
  }
}

export const endpointsClashV1: IEndpoints = {
  GetPlayers: {
    path: 'players/by-puuid/$(puuid)',
    prefix: 'clash',
    version: 1
  },

  GetTeam: {
    path: 'teams/$(teamId)',
    prefix: 'clash',
    version: 1
  },

  GetTournaments: {
    path: 'tournaments',
    prefix: 'clash',
    version: 1
  },

  GetTournamentByTeamId: {
    path: 'tournaments/by-team/$(teamId)',
    prefix: 'clash',
    version: 1
  },

  GetTournamentById: {
    path: 'tournaments/$(tournamentId)',
    prefix: 'clash',
    version: 1
  }
}

export const endpointsRiotV1: IEndpoints = {
  AccountPUUID: {
    path: 'accounts/by-puuid/$(summonerPUUID)',
    prefix: 'account',
    version: 1,
  },
  RiotId: {
    path: 'accounts/by-riot-id/$(gameName)/$(tagLine)',
    prefix: 'account',
    version: 1,
  },
  ActiveShard: {
    path: 'active-shards/by-game/$(game)/by-puuid/$(summonerPUUID)',
    prefix: 'account',
    version: 1,
  },
  AccessToken: {
    path: 'accounts/me',
    prefix: 'account',
    version: 1,
  },
  ActiveRegion: {
    path: 'region/by-game/$(game)/by-puuid/$(summonerPUUID)',
    prefix: 'account',
    version: 1
  }
}

export const endpointsV1: IEndpoints = {
  Config: {
    path: 'challenges/config',
    prefix: 'challenges',
    version: 1
  },
  Percentiles: {
    path: 'challenges/percentiles',
    prefix: 'challenges',
    version: 1
  },
  ChallengeConfig: {
    path: 'challenges/$(challengeId)/config',
    prefix: 'challenges',
    version: 1
  },
  Leaderboards: {
    path: 'challenges/$(challengeId)/leaderboards/by-level/$(level)',
    prefix: 'challenges',
    version: 1
  },
  ChallengePercentiles: {
    path: 'challenges/$(challengeId)/percentiles',
    prefix: 'challenges',
    version: 1
  },
  PlayerChallenges: {
    path: 'player-data/$(summonerPUUID)',
    prefix: 'challenges',
    version: 1,
  },
}
