import { InfoDto } from './InfoDto.dto'
import { MetadataDto } from './MetadataDto.dto'

export class MatchTFTDTO {
  /**
   * Match info
   */
  readonly info: InfoDto
  /**
   * Match metadata
   */
  readonly metadata: MetadataDto
}
