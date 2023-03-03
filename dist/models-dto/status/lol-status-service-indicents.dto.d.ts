import { LolStatusServiceIncidentsUpdate } from './lol-status-service-incidents-updates.dto';
/**
 * Lol Status service incident
 */
export declare class LolStatusServiceStatusIncident {
    /**
     * Is Active
     */
    active: boolean;
    /**
     * Indicent creation date
     */
    created_at: string;
    /**
     * Indicent id
     */
    id: number;
    /**
     * Updates list
     */
    updates: LolStatusServiceIncidentsUpdate;
}
