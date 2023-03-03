import { MatchApi } from './match/match';
import { LeagueApi } from './league/league';
import { SummonerApi } from './summoner/summoner';
import { ThirdPartyCode } from './thirdPartyCode/thirdPartyCode';
import { ChampionApi } from './champion/champion';
import { SpectatorApi } from './spectator/spectator';
import { StatusApi } from './status/status';
import { DataDragonService } from './dataDragon/DataDragonService';
import { SeedApi } from './seed/seed';
import { BaseApiLol } from './base/base.api.lol';
import { ClashApi } from './clash/clash.api.lol';
import { MatchV5Api } from './match/match-v5';
import { StatusV4Api } from './status/status-v4';
import { ChallengesV1Api } from './challenges/challenges';
/**
 * Classic league of legends api
 */
export declare class LolApi extends BaseApiLol {
    /**
     * ChallengesV1 methods
     */
    readonly Challenges: ChallengesV1Api;
    /**
     * Match methods
     * @deprecated use v5 instead
     */
    readonly Match: MatchApi;
    /**
     * MatchV5 methods
     */
    readonly MatchV5: MatchV5Api;
    /**
     * League methods
     */
    readonly League: LeagueApi;
    /**
     * Summoner methods
     */
    readonly Summoner: SummonerApi;
    /**
     * Third Party methods
     */
    readonly ThirdPartyCode: ThirdPartyCode;
    /**
     * Champion mastery
     */
    readonly Champion: ChampionApi;
    /**
     * Spectator methods
     */
    readonly Spectator: SpectatorApi;
    /**
     * Status methods
     * @deprecated Use StatusV4 instead
     */
    readonly Status: StatusApi;
    /**
     * StatusV4 methods
     */
    readonly StatusV4: StatusV4Api;
    /**
     * Clash methods
     */
    readonly Clash: ClashApi;
    /**
     * Data dragon
     */
    readonly DataDragon: DataDragonService;
    /**
     * Seed methods
     */
    readonly Seed: SeedApi;
}
