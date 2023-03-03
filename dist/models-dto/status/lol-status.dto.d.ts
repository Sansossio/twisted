import { LolStatusServiceDTO } from './lol-status-service.dto';
/**
 * Lol Status response
 */
export declare class LolStatusDTO {
    /**
     * Lol server
     */
    name: string;
    /**
     * Server lol key
     */
    region_tag: string;
    /**
     * Hostname
     */
    hostname: string;
    /**
     * Server short name
     */
    slug: string;
    /**
     * Locales
     */
    locales: string[];
    /**
     * Services status
     */
    services: LolStatusServiceDTO;
}
