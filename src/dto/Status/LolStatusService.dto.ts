import { LolStatusServiceStatusIncident } from './LolStatusServiceIndicents.dto'

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
