import { MatchParticipantsIdentitiesPlayerDto } from './MatchParticipantsIdentitiesPlayer.dto'

export class MatchParticipantsIdentitiesDto {
  /**
   * Player information
   */
  player: MatchParticipantsIdentitiesPlayerDto
  /**
   * Participant id
   */
  participantId: number
}
