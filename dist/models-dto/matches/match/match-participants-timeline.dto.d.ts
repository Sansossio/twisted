export interface IMatchParticipantsTimeLineMap {
    [key: string]: number;
}
export declare class MatchParticipantsTimelineDto {
    /**
     * Participant's calculated lane. MID and BOT are legacy values. (Legal values: MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM)
     */
    lane: string;
    /**
     * Participant id
     */
    participantId: number;
    /**
     * Participant's calculated role. (Legal values: DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT)
     */
    role: string;
    /**
     * Creep score difference versus the calculated lane opponent(s) for a specified period.
     */
    csDiffPerMinDeltas?: IMatchParticipantsTimeLineMap;
    /**
     * Gold for a specified period.
     */
    goldPerMinDeltas?: IMatchParticipantsTimeLineMap;
    /**
     * Experience difference versus the calculated lane opponent(s) for a specified period.
     */
    xpDiffPerMinDeltas?: IMatchParticipantsTimeLineMap;
    /**
     * Creeps for a specified period.
     */
    creepsPerMinDeltas?: IMatchParticipantsTimeLineMap;
    /**
     * Experience change for a specified period
     */
    xpPerMinDeltas?: IMatchParticipantsTimeLineMap;
    /**
     * Damage taken difference versus the calculated lane opponent(s) for a specified period.
     */
    damageTakenDiffPerMinDeltas?: IMatchParticipantsTimeLineMap;
    /**
     * Damage taken for a specified period.
     */
    damageTakenPerMinDeltas?: IMatchParticipantsTimeLineMap;
}
