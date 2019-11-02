import rp from 'request-promise'
import { DataDragonEnum } from '../../../constants/dataDragon'
import { RealmServers } from '../../../constants/realmServers'
import { RealmDTO, ChampionsDataDragon, ChampionsDataDragonDetails, QueuesDataDragonDTO, GameModesDataDragonDTO } from '../../../dto'
import { Champions, getChampionNameCapital } from '../../../constants/champions'
import { ChampionsDataDragonDetailsSolo } from '../../../dto/DataDragon/Champions.datadragon.dto'
import { MapsDataDragonDTO } from '../../../dto/DataDragon/Maps.datadragon.dto'
import { GameTypesDataDragonDTO } from '../../../dto/DataDragon/GameTypes.datadragon.dto'

/**
 * Data Dragon is our way of centralizing League of Legends game data and assets, including champions, items, runes, summoner spells, and profile icons. All of which can be used by third-party developers. You can download a gzipped tar file (.tar.gz) for each patch which will contain all assets for that patch.
 * https://ddragon.Lol.com/cdn/dragontail-9.20.1.tgz
 * Please be aware that updating Data Dragon after each League of Legends patch is a manual process, so it is not always updated immediately after a patch. Your patience is appreciated.
 */
export class DataDragonService {
  // Internal methods
  private async request<T> (path: string, base: DataDragonEnum = DataDragonEnum.BASE): Promise<T> {
    const options: rp.OptionsWithUri = {
      uri: `${base}/${path}`,
      method: 'GET',
      json: true
    }
    return rp(options)
  }
  // Riot requests
  // Data dragon
  async getRealms (server: RealmServers): Promise<RealmDTO> {
    const path = `realms/${server}.json`
    return this.request(path)
  }

  async getVersions (): Promise<string[]> {
    const path = 'api/versions.json'
    return this.request(path)
  }

  async getLanguages (): Promise<string[]> {
    const path = 'cdn/languages.json'
    return this.request(path)
  }

  async getChampion (): Promise<ChampionsDataDragon>
  async getChampion (champ: Champions): Promise<ChampionsDataDragonDetailsSolo>
  async getChampion (champ?: Champions): Promise<ChampionsDataDragon | ChampionsDataDragonDetailsSolo> {
    const version = (await this.getVersions())[0]
    const lang = 'en_US'
    let champName = ''
    let path = `cdn/${version}/data/${lang}/champion`
    if (champ) {
      champName = getChampionNameCapital(champ)
      path += `/${champName}.json`
    } else {
      path += '.json'
    }
    const fullResponse = await this.request<ChampionsDataDragon>(path)
    if (champ) {
      return fullResponse.data[champName] as ChampionsDataDragonDetailsSolo
    }
    return fullResponse
  }

  // Static data
  async getQueues (): Promise<QueuesDataDragonDTO[]> {
    const path = 'docs/lol/queues.json'
    return this.request(path, DataDragonEnum.STATIC)
  }

  async getSeasons (): Promise<{ id: number, season: string}[]> {
    const path = 'docs/lol/seasons.json'
    return this.request(path, DataDragonEnum.STATIC)
  }

  async getMaps (): Promise<MapsDataDragonDTO[]> {
    const path = 'docs/lol/maps.json'
    return this.request(path, DataDragonEnum.STATIC)
  }

  async getGameModes (): Promise<GameModesDataDragonDTO[]> {
    const path = 'docs/lol/gameModes.json'
    return this.request(path, DataDragonEnum.STATIC)
  }

  async getGameTypes (): Promise<GameTypesDataDragonDTO[]> {
    const path = 'docs/lol/gameTypes.json'
    return this.request(path, DataDragonEnum.STATIC)
  }
}
