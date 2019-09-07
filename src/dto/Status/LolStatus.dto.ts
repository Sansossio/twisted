import { LolStatusServiceDTO } from './LolStatusService.dto'

/**
 * Lol Status response
 */
export class LolStatusDTO {
  /**
   * Lol server
   */
  name: string
  /**
   * Server lol key
   */
  // tslint:disable:variable-name
  region_tag: string
  /**
   * Hostname
   */
  hostname: string
  /**
   * Server short name
   */
  slug: string
  /**
   * Locales
   */
  locales: string[]
  /**
   * Services status
   */
  services: LolStatusServiceDTO
}
