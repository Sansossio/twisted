import { InfoDto } from './info.dto'
import { MetadataDto } from './metadata.dto'

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
