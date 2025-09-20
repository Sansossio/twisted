export class RunesReforgedDTO {
  id: number
  key: string
  icon: string
  name: string
  slots: [
    {
      runes: RunesReforgedSlotsDTO[]
    }
  ]
}

export class RunesReforgedSlotsDTO {
  id: number
  key: string
  icon: string
  name: string
  shortDesc: string
  longDesc: string
}
