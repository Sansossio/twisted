import { MatchPositionDto } from './MatchPosition.dto'

export class MatchParticipantFrameDto {
  totalGold: number
  teamScore: number
  participantId: number
  level: number
  currentGold: number
  minionsKilled: number
  dominionScore: number
  xp: number
  jungleMinionsKilled: number
  position: MatchPositionDto
}
