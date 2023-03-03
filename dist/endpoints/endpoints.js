"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointsV1 = exports.endpointsClashV1 = exports.endpointsTFTV1 = exports.endpointsV3 = exports.endpointsV4 = exports.endpointsV5 = void 0;
exports.endpointsV5 = {
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
    }
};
exports.endpointsV4 = {
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
    ChampionMasteryBySummoner: {
        path: 'champion-masteries/by-summoner/$(encryptedSummonerId)',
        prefix: 'champion-mastery',
        version: 4
    },
    ChampionMasteryBySummonerChampion: {
        path: 'champion-masteries/by-summoner/$(encryptedSummonerId)/by-champion/$(championId)',
        prefix: 'champion-mastery',
        version: 4
    },
    ChampionsScore: {
        path: 'scores/by-summoner/$(encryptedSummonerId)',
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
};
exports.endpointsV3 = {
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
};
exports.endpointsTFTV1 = {
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
        path: 'entries/by-summoner/$(encryptedSummonerId)',
        prefix: 'league',
        version: 1
    }
};
exports.endpointsClashV1 = {
    GetPlayers: {
        path: 'players/by-summoner/$(encryptedSummonerId)',
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
};
exports.endpointsV1 = {
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
    }
};
