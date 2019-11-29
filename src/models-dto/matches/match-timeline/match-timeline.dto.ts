import { MatchTimeLineFrameDto } from './matchm-timeline-frame.dto'
/**
 * Match time line
 */
export class MatchTimelineDto {
  /**
   * Timeline frames
   */
  frames: MatchTimeLineFrameDto[]
  /**
   * Frame interval
   */
  frameInterval: number
}
