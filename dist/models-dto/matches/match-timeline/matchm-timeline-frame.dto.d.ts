import { MatchParticipantFrameDto } from './match-participant-frame.dto';
import { MatchEventDto } from './match-event.dto';
export interface IParticipantFrames {
    [key: string]: MatchParticipantFrameDto;
}
/**
 * Match timeline frame
 */
export declare class MatchTimeLineFrameDto {
    /**
     * Timestamp
     */
    timestamp: number;
    /**
     * Participant frames
     */
    participantFrames: IParticipantFrames;
    /**
     * Events
     */
    events: MatchEventDto[];
}
