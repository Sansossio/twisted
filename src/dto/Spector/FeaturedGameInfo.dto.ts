import { BannedChampion } from '../Match/Match/MatchTeamsBans.dto'
import { ObserverDTO } from './Observer.dto'
import { ParticipantDTO } from './Participant.dto'

export class FeaturedGameInfo {
  /**
   * The ID of the game
   */
  gameId: number
  /**
   * The game start time represented in epoch milliseconds
   */
  gameStartTime: number
  /**
   * The ID of the platform on which the game is being played
   */
  platformId: string
  /**
   * The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
   */
  gameMode: string
  /**
   * The ID of the map
   */
  mapId: number
  /**
   * The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
   */
  gameType: string
  /**
   * Banned champion information
   */
  bannedChampions: BannedChampion[]
  /**
   * The observer information
   */
  observers: ObserverDTO
  /**
   * The participant information
   */
  participants: ParticipantDTO[]
  /**
   * The amount of time in seconds that has passed since the game started
   */
  gameLength: number
  /**
   * The queue type (queue types are documented on the Game Constants page)
   */
  gameQueueConfigId: number
}
