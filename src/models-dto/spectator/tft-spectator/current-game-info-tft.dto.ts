import { BannedChampion } from '../../matches/match/match-teams-bans.dto'
import { ObserverDTO } from '../observer.dto'
import { CurrentGameParticipantDTO } from '../current-game-participant.dto'

export class CurrentGameInfoTFTDTO {
   gameId: number
   gameStartTime: number
   platformId: string
   gameMode: string
   mapId: number
   gameType: string
   bannedChampions: BannedChampion[]
   observers: ObserverDTO
   participants: CurrentGameParticipantDTO[]
   gameLength: number
   gameQueueConfigId: number
}