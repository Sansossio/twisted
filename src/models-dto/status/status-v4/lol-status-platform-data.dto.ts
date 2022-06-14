import { LolStatusDTO } from "../lol-status.dto";

/**
 * Lol Status Content dto
 */
export class LolStatusContentDTO {
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
  maintenances: LolStatusDTO;
  /**
   * 
   */
  incidents: LolStatusDTO;
}
