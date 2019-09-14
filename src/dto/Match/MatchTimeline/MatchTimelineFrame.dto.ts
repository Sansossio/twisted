import { MatchParticipantFrameDto } from './MatchParticipantFrame.dto'
import { MatchEventDto } from './MatchEvent.dto'

export interface IParticipantFrames {
  [key: string]: MatchParticipantFrameDto
}
/**
 * Match timeline frame
 */
export class MatchTimeLineFrameDto {
  /**
   * Timestamp
   */
  timestamp: number
  /**
   * Participant frames
   */
  participantFrames: IParticipantFrames
  /**
   * Events
   */
  events: MatchEventDto[]
}
