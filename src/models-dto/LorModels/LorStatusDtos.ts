export class PlatformDataDto {
  readonly id: string
  readonly name: string
  readonly locales: string[]
  readonly maintenances: StatusDto[]
  readonly incidents: StatusDto[]
}

export class StatusDto {
  readonly id: number
  readonly maintenanceStatus: string
  readonly incidentSeverity: string
  readonly titles: ContentDto[]
  readonly updates: UpdateDto[]
  readonly createdAt: string
  readonly archieveAt: string
  readonly updatedAt: string
  readonly platforms: string[]
}

export class ContentDto {
  readonly locale: string
  readonly content: string
}

export class UpdateDto {
  readonly id: number
  readonly author: string
  readonly publish: boolean
  readonly publishLocations: string[]
  readonly translations: ContentDto[]
  readonly createdAt: string
  readonly updatedAt: string
}