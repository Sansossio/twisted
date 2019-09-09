import { Regions, FindSummonerBy } from '..'
import { BaseApi } from './base'
import { ChampionRotationV3DTO } from '../DTO/Champion/ChampionRotation.DTO'
import { ChampionRotationEndpoint } from '../endpoints/Champion/ChampionRotation.endpoint'
import { SummonerEndpoint } from '../endpoints/Summoner/Summoner.endpoint'
import { SummonerV4DTO } from '../dto/Summoner/Summoner.dto'
import { LolStatusDTO } from '../dto/Status/LolStatus.dto'
import { LolStatusEndpoint } from '../endpoints/LolStatus/LolStatus.endpoint'

/**
 * Riot Games api wrap
 */
export class RiotApi extends BaseApi {
  /**
   * Get champion rotation
   * @param region Riot region
   */
  public async getChampionRotation (region: Regions)
  : Promise<ChampionRotationV3DTO> {
    return this.request(region, ChampionRotationEndpoint.path)
  }

  /**
   * Get summoner
   * @param by {SummonerBy}
   * @param value Value to find
   * @param region Riot region
   */
  public async getSummoner (by: FindSummonerBy, value: string, region: Regions)
  : Promise<SummonerV4DTO> {
    let path = SummonerEndpoint.path
    if (by === FindSummonerBy.ID) {
      path = path.replace('/$(by)/', '')
    }
    const params = {
      summonerName: value,
      by
    }
    return this.request(region, path, params)
  }

  /**
   * Lol status by server
   * @param region Riot region
   */
  public async getLolStatus (region: Regions)
  : Promise<LolStatusDTO> {
    return this.request(region, LolStatusEndpoint.path)
  }
}
