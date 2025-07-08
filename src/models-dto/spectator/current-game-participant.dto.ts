import { PerksDTO } from './perks.dto'
import { GameCustomizationObjectDTO } from './game-customization-object.dto'

export class CurrentGameParticipantDTO {
  /**
   * The ID of the profile icon used by this participant
   */
  profileIconId: number
  /**
   * The ID of the champion played by this participant
   */
  championId: number
  /**
   * @deprecated summoner name is not present anymore
   * The summoner name of this participant
   */
  summonerName: string
  /**
   * : List of Game Customizations
   */
  gameCustomizationObjects: GameCustomizationObjectDTO[]
  /**
   * Flag indicating whether or not this participant is a bot
   */
  bot: boolean
  /**
   * Perks/Runes Reforged Information
   */
  perks: PerksDTO
  /**
   * The ID of the second summoner spell used by this participant
   */
  spell2Id: number
  /**
   * The team ID of this participant, indicating the participant's team
   */
  teamId: number
  /**
   * The ID of the first summoner spell used by this participant
   */
  spell1Id: number
  /**
   * The encrypted puuid of this participant
   */
  puuid: string
}
