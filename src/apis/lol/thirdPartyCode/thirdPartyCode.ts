import { INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes'
import { Regions } from '../../../constants'
import { endpointsV4 } from '../../../endpoints/endpoints'
import { ThirdPartyCodeDTO } from '../../../dto/ThirdPartyCode/ThirdPartyCode.dto'
import { ApiResponseDTO } from '../../../dto/ApiResponse/ApiResponse.dto'
import { BaseApiLol } from '../base/base.api.lol'

/**
 * Third party methods
 */
export class ThirdPartyCode extends BaseApiLol {
  private errorHandler (e: any) {
    const { statusCode } = e.error || e
    if (statusCode !== INTERNAL_SERVER_ERROR && statusCode !== NOT_FOUND) {
      throw e
    }
  }
  /**
   * Valid codes must be no longer than 256 characters and only use valid characters: 0-9, a-z, A-Z, and -
   * @param encryptedSummonerId
   * @param region
   */
  public async get (encryptedSummonerId: string, region: Regions): Promise<ApiResponseDTO<ThirdPartyCodeDTO>> {
    let code
    let rateLimits
    const params = {
      encryptedSummonerId
    }
    try {
      const data = await this.request<string>(region, endpointsV4.ThirdPartyCode, params)
      rateLimits = data.rateLimits
      code = data.response
    } catch (e) {
      this.errorHandler(e)
      code = null
    }
    return {
      rateLimits,
      response: {
        code
      }
    }
  }
}
