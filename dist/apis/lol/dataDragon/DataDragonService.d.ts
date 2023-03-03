import { RealmServers } from '../../../constants/realmServers';
import { RealmDTO, ChampionsDataDragon, QueuesDataDragonDTO, GameModesDataDragonDTO } from '../../../models-dto';
import { Champions } from '../../../constants/champions';
import { ChampionsDataDragonDetailsSolo } from '../../../models-dto/data-dragon/champions.datadragon.dto';
import { MapsDataDragonDTO } from '../../../models-dto/data-dragon/maps.datadragon.dto';
import { GameTypesDataDragonDTO } from '../../../models-dto/data-dragon/game-types.datadragon.dto';
import { RunesReforgedDTO } from '../../../models-dto/data-dragon/runes-reforged.dto';
/**
 * Data Dragon is our way of centralizing League of Legends game data and assets, including champions, items, runes, summoner spells, and profile icons. All of which can be used by third-party developers. You can download a gzipped tar file (.tar.gz) for each patch which will contain all assets for that patch.
 * https://ddragon.Lol.com/cdn/dragontail-9.20.1.tgz
 * Please be aware that updating Data Dragon after each League of Legends patch is a manual process, so it is not always updated immediately after a patch. Your patience is appreciated.
 */
export declare class DataDragonService {
    private request;
    getRealms(server: RealmServers): Promise<RealmDTO>;
    getVersions(): Promise<string[]>;
    getLanguages(): Promise<string[]>;
    /**
     * Runes reforged (perks)
     */
    getRunesReforged(): Promise<RunesReforgedDTO[]>;
    getChampion(): Promise<ChampionsDataDragon>;
    getChampion(champ: Champions | number): Promise<ChampionsDataDragonDetailsSolo>;
    getQueues(): Promise<QueuesDataDragonDTO[]>;
    getSeasons(): Promise<{
        id: number;
        season: string;
    }[]>;
    getMaps(): Promise<MapsDataDragonDTO[]>;
    getGameModes(): Promise<GameModesDataDragonDTO[]>;
    getGameTypes(): Promise<GameTypesDataDragonDTO[]>;
}
