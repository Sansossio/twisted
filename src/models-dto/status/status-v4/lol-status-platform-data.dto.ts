import { LolStatusStatusDTO } from './lol-status-status.dto';

/**
 * Lol Status Content dto
 */
export class LolStatusPlatformDataDTO {
  /**
   * Lol Server (e.g. EUW1)
   */
  id: string;
  /**
   * Lol Server Region name (e.g. EU West)
   */
  name: string;
  /**
   * 
   */
  locales: string[];
  /**
   * 
   */
  maintenances: LolStatusStatusDTO;
  /**
   * 
   */
  incidents: LolStatusStatusDTO;
}
