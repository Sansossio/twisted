import { LolStatusServiceStatusIncident } from './lol-status-service-indicents.dto'

/**
 * Lol Service dto
 */
export class LolStatusServiceDTO {
  /**
   * Service name
   */
  name: string
  /**
   * Service status
   */
  status: string
  /**
   * Service slug
   */
  slug: string
  /**
   * Service incidents
   */
  indicents: LolStatusServiceStatusIncident
}
