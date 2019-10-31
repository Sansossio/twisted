import rp from 'request-promise'
import { DataSeed } from '../../../constants/dataSeed'
import { MatchDto } from '../../../dto/Match/Match/Match.dto'

export class SeedApi {
  private readonly baseUrl = DataSeed.BASE

  private async request<T> (path: string): Promise<T> {
    const uri = `${this.baseUrl}/${path}`
    const options: rp.OptionsWithUri = {
      uri,
      method: 'GET',
      json: true
    }
    return rp(options)
  }

  async matches (id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10): Promise<{ matches: MatchDto[] }> {
    if (id < 1 || id > 10) {
      throw new Error('Invalid index')
    }
    const path = `matches${id}.json`
    return this.request(path)
  }
}
