import { MatchParticipantsStatsDto } from './match-participants-stats.dto';
import { MatchParticipantsRuneDto } from './match-participants-rune.dto';
import { MatchParticipantsTimelineDto } from './match-participants-timeline.dto';
import { MatchParticipantsMasteryDto } from './match-participants-mastery.dto';
/**
 * Participant
 */
export declare class MatchParticipantDTO {
    /**
     * Participant statistics.
     */
    stats: MatchParticipantsStatsDto;
    /**
     * Participant id
     */
    participantId: number;
    /**
     * List of legacy Rune information. Not included for matches played with Runes Reforged.
     */
    runes: MatchParticipantsRuneDto[];
    /**
     * Participant timeline data.
     */
    timeline: MatchParticipantsTimelineDto;
    /**
     * 100 for blue side. 200 for red side.
     */
    teamId: number;
    /**
     * Second Summoner Spell id.
     */
    spell2Id: number;
    /**
     * List of legacy Mastery information. Not included for matches played with Runes Reforged.
     */
    masteries: MatchParticipantsMasteryDto;
    /**
     * Highest ranked tier achieved for the previous season in a specific subset of queueIds, if any, otherwise null.Used to display border in game loading screen. Please refer to the Ranked Info documentation. (Legal values: CHALLENGER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE, UNRANKED)
     */
    highestAchievedSeasonTier: string;
    /**
     * First Summoner Spell id.
     */
    spell1Id: number;
    /**
     * Champion id
     */
    championId: number;
}
