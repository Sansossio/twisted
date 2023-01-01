import { ChallengeV1DTO } from './challenges.dto'
import { Levels } from '../../constants'
import { Level } from './enum/enum.challenges'

export class Points {
    /**
     * Level of the category points.
     */
  public readonly level: Levels // should this be tier instead?
    /**
     * Current number of points in the category.
     */
  public readonly current: number
    /**
     * Maximum number of points in the category.
     */
  public readonly max: number
    /**
     * Percentile of the category points.
     */
  public readonly percentile: number
}

export interface Preferences {
  bannerAccent: string
  title: string
  challengeIds: number[]
}

export class ProfileV1DTO {
    /**
     * Total points data.
     */
  public readonly totalPoints: Points
    /**
     * Category points data.
     */
  public readonly categoryPoints: { [key: string]: Points }
    /**
     * List of challenges.
     */
  public readonly challenges: ChallengeV1DTO[]
    /**
     * Preferences.
     */
  public readonly preferences: Preferences
}

export class PercentilesV1DTO {
    /**
     * Total points data.
     */
  public readonly percentiles: Record<Level, number>
}

type LocalizedNames = {
    [key in 'ar_AE' | 'cs_CZ' | 'de_DE' | 'el_GR' | 'en_AU' | 'en_GB' | 'en_PH' | 'en_SG' | 'en_US' | 'es_AR' | 'es_ES' | 'es_MX' | 'fr_FR' | 'hu_HU' | 'it_IT' | 'ja_JP' | 'ko_KR' | 'pl_PL' | 'pt_BR' | 'ru_RU' | 'th_TH' | 'tr_TR' | 'vi_VN' | 'zh_CN' | 'zh_TW']: {
      description: string;
      name: string;
      shortDescription: string;
    }
}

export class ChallengeConfigV1DTO {
  public readonly id: number
  public readonly percentiles: LocalizedNames
  public readonly state: 'ENABLED' | 'DISABLED'
  public readonly leaderboard: boolean
  public readonly thresholds: {
    [key: string]: number;
  }
}

export class ChallengeLeaderboardEntryV1DTO {
  public readonly position: number
  public readonly puuid: string
  public readonly value: number
}
