import { MatchApi } from './match/match'
import { LeagueApi } from './league/league'
import { SummonerApi } from './summoner/summoner'
import { ChampionApi } from './champion/champion'
import { SpectatorApi } from './spectator/spectator'
import { SpectatorV5Api } from './spectator/spectator-v5'
import { StatusApi } from './status/status'
import { DataDragonService } from './dataDragon/DataDragonService'
import { SeedApi } from './seed/seed'
import { BaseApiLol } from './base/base.api.lol'
import { ClashApi } from './clash/clash.api.lol'
import { MatchV5Api } from './match/match-v5'
import { StatusV4Api } from './status/status-v4'
import { ChallengesV1Api } from './challenges/challenges'

/**
 * Classic league of legends api
 */
export class LolApi extends BaseApiLol {
  /**
   * ChallengesV1 methods
   */
  public readonly Challenges = new ChallengesV1Api(this.getParam()) 
  /**
   * Match methods
   * @deprecated use v5 instead
   */
  public readonly Match = new MatchApi(this.getParam())
  /**
   * MatchV5 methods
   */
  public readonly MatchV5 = new MatchV5Api(this.getParam())
  /**
   * League methods
   */
  public readonly League = new LeagueApi(this.getParam())
  /**
   * Summoner methods
   * 
   */
  public readonly Summoner = new SummonerApi(this.getParam())
  /**
   * Champion mastery
   */
  public readonly Champion = new ChampionApi(this.getParam())
  /**
   * Spectator methods
   * @deprecated
   */
  public readonly SpectatorV5 = new SpectatorV5Api(this.getParam())
  /**
   * Spectator methods
   * @deprecated Use SpectatorV5 instead
   */
  public readonly Spectator = new SpectatorApi(this.getParam())
  /**
   * Status methods
   * @deprecated Use StatusV4 instead
   */
  public readonly Status = new StatusApi(this.getParam())
  /**
   * StatusV4 methods
   */
  public readonly StatusV4 = new StatusV4Api(this.getParam())
  /**
   * Clash methods
   */
  public readonly Clash = new ClashApi(this.getParam())
  /**
   * Data dragon
   */
  public readonly DataDragon = new DataDragonService()
  /**
   * Seed methods
   */
  public readonly Seed = new SeedApi()
}
