import { MatchParticipantsIdentitiesPlayerDto } from './match-participants-identities-player.dto'

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
