import { LolStatusContentDTO } from "./lol-status-content.dto";
import { LolStatusUpdateDTO } from "./lol-status-update.dto";

/**
 * Lol Status response
 */
export class LolStatusStatusDTO {
  /**
   * Lol server (ID of incident)
   */
  id: number;
  /**
   * Status of the service (scheduled, in_progress, complete)
   */
  // tslint:disable:variable-name
  maintenance_status: string;
  /**
   * Severity of the service (info, warning, critical)
   */
  incident_severity: string;
  /**
   * Title of the service in locale language (e.g. "Maintenance Notification")
   * WIP
   */
  titles: LolStatusContentDTO;
  /**
   * Updates of the incident
   * e.g. "At 06/14/2022 20:00 PDT the game will be unavailable until 06/14/2022 22:00 PDT."
   * WIP
   */
  updates: LolStatusUpdateDTO;
  /**
   * When was the incident created
   */
  created_at: string;
  /**
   * When was the incident created
   */
  archive_at: string;
  /**
   * When was the incident created
   */
  updated_at: string;
  /**
   * When was the incident created
   */
  platforms: string[];
}
