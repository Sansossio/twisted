import { LolStatusContentDTO } from "./lol-status-content.dto";

/**
 * Lol Service dto
 */
export class LolStatusUpdateDTO {
  /**
   * ID of the update
   */
  id: number;
  /**
   *
   */
  author: string;
  /**
   *
   */
  publish: boolean;
  /**
   *
   */
  publish_locations: string[];
  /**
   *
   */
  translations: LolStatusContentDTO;
  /**
   *
   */
  created_at: string;
  /**
   *
   */
  updated_at: string;
}
