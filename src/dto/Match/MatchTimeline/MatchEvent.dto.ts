import { MatchPositionDto } from './MatchPosition.dto'
/**
 * Match Event DTO
 */
export class MatchEventDto {
  /**
   * Legal values: CHAMPION_KILL, WARD_PLACED, WARD_KILL, BUILDING_KILL, ELITE_MONSTER_KILL, ITEM_PURCHASED, ITEM_SOLD, ITEM_DESTROYED, ITEM_UNDO, SKILL_LEVEL_UP, ASCENDED_EVENT, CAPTURE_POINT, PORO_KING_SUMMON)
   */
  type: string
  participantId: number
  timestamp: number

  eventType?: string
  towerType?: string
  teamId?: number
  ascendedType?: string
  killerId?: number
  levelUpType?: string
  pointCaptured?: string
  assistingParticipantIds?: number[]
  wardType?: string
  monsterType?: string
  skillSlot?: number
  victimId?: number
  afterId?: number
  monsterSubType?: string
  laneType?: string
  itemId?: number
  buildingType?: string
  creatorId?: number
  position?: MatchPositionDto
  beforeId?: number
}
