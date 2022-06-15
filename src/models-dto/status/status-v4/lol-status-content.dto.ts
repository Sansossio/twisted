/**
 * Lol Status Content dto
 */
export class LolStatusContentDTO {
  /**
   * Incident or Maintance status language
   * (e.g. `en_GB`)
   */
  locale: string;
  /**
   * Incident or Maintance
   * (e.g. `Account Transfers Unavailable`)
   */
  content: string;
}
