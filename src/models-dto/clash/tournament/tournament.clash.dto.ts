import { TournamentScheduleClashDTO } from './tournament-schedule.clash.dto'

export class TournamentClashDTO {
  id: number
  themeId: number
  nameKey: string
  nameKeySecondary: string
  schedule: TournamentScheduleClashDTO[]
}
