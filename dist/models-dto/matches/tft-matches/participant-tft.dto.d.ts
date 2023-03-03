import { TraitDto } from './trait.dto';
import { UnitDto } from './unit.dto';
import { CompanionDto } from './companion-dto.dto';
export declare class ParticipantDto {
    /**
     * Participant placement upon elimination.
     */
    placement: number;
    /**
     * Participant Little Legend level. Note: This is not the number of active units.
     */
    level: number;
    /**
     * The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5.
     */
    last_round: number;
    /**
     * The number of seconds before the participant was eliminated.
     */
    time_eliminated: number;
    /**
     * Participant's companion.
     */
    companion: CompanionDto;
    /**
     * A complete list of traits for the participant's active units.
     */
    traits: TraitDto[];
    /**
     * Number of players the participant eliminated.
     */
    players_eliminated: number;
    /**
     * Encrypted PUUID.
     */
    puuid: string;
    /**
     * Damage the participant dealt to other players.
     */
    total_damage_to_players: number;
    /**
     * A list of active units for the participant.
     */
    units: UnitDto[];
    /**
     * Gold left after participant was eliminated.
     */
    gold_left: number;
}
