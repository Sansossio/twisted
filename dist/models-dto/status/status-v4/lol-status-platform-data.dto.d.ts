import { LolStatusStatusDTO } from './lol-status-status.dto';
/**
 * Lol Status Platform Data dto
 */
export declare class LolStatusPlatformDataDTO {
    /**
     * Lol Server Region ID
     * (e.g. `EUW1`)
     */
    id: string;
    /**
     * Lol Server Region name
     * (e.g. `EU West`)
     */
    name: string;
    /**
     * Available languages
     * (e.g. `en_GB`)
     */
    locales: string[];
    /**
     * Lol Server maintenances
     * (e.g. `titles`)
     */
    maintenances: LolStatusStatusDTO;
    /**
     * Lol Server incidents
     * (e.g. `updates`)
     */
    incidents: LolStatusStatusDTO;
}
