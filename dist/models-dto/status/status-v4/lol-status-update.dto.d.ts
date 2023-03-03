import { LolStatusContentDTO } from './lol-status-content.dto';
/**
 * Lol Service dto
 */
export declare class LolStatusUpdateDTO {
    /**
     * ID of the update
     * (e.g. `7919`)
     */
    id: number;
    /**
     * Author of the update
     * (e.g. `Riot Games`)
     */
    author: string;
    /**
     * Is the update notification published
     * (e.g. `true`)
     */
    publish: boolean;
    /**
     * Where is the update notification visible
     * (e.g. `game, riotstatus`)
     */
    publish_locations: string[];
    /**
     * The update translations
     * (e.g. `content` and `locale`)
     *
     */
    translations: LolStatusContentDTO;
    /**
     * When was the update created
     * (e.g. `2020-06-14T00:00:00.000Z`)
     */
    created_at: string;
    /**
     * When was the update updated
     * (e.g. `2020-06-15T00:00:00.000Z`)
     */
    updated_at: string;
}
