import { LolStatusServiceIncidentsUpdate } from './LolStatusServiceIncidentsUpdates.dto'
/**
 * Lol Status service incident
 */
export class LolStatusServiceStatusIncident {
  /**
   * Is Active
   */
  active: boolean
  /**
   * Indicent creation date
   */
  // tslint:disable:variable-name
  created_at: string
  /**
   * Indicent id
   */
  id: number
  /**
   * Updates list
   */
  updates: LolStatusServiceIncidentsUpdate
}
