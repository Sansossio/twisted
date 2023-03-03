import { LolStatusContentDTO } from './lol-status-content.dto';
import { LolStatusUpdateDTO } from './lol-status-update.dto';
/**
 * Lol Status dto
 */
export declare class LolStatusStatusDTO {
    /**
     * Lol incident ID
     * (e.g. `7919`)
     */
    id: number;
    /**
     * Status of the service
     * (e.g. `scheduled`, `in_progress`, `complete`)
     */
    maintenance_status: string;
    /**
     * Severity of the service
     * (e.g. `info`, `warning`, `critical`)
     */
    incident_severity: string;
    /**
     * Title of the service in locale language
     * (e.g. `Maintenance Notification`)
     */
    titles: LolStatusContentDTO;
    /**
     * Updates of the incident or maintenance
     * (e.g. `publish_locations`, `author`...)
     */
    updates: LolStatusUpdateDTO;
    /**
     * When was the incident created
     * (e.g. `2022-06-15T05:05:22.317047+00:00`)
     */
    created_at: string;
    /**
     * When was the incident archived
     * (e.g. `2022-06-14T04:49:00+00:00`)
     */
    archive_at: string;
    /**
     * When was the incident last updated
     * (e.g. `2022-06-14T04:49:00+00:00`)
     */
    updated_at: string;
    /**
     * Which platforms are affected
     * (e.g. `windows`, `macos`)
     */
    platforms: string[];
}
