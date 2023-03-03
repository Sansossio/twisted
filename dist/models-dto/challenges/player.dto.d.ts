export declare namespace PlayerDTO {
    interface Player {
        /** All challenges for a player. */
        challenges: Challenge[];
        preferences: Preferences;
        /** Summed points. */
        totalPoints: TotalPoints;
        /** Information for each category. */
        categoryPoints: CategoryPoints;
    }
    interface Challenge {
        challengeId: number;
        percentile: number;
        level: string;
        value: number;
        achievedTime: number;
    }
    interface Preferences {
        bannerAccent: string;
        title: string;
        challengeIds: number[];
    }
    interface TotalPoints {
        level: string;
        current: number;
        max: number;
        percentile?: number;
    }
    interface CategoryPoints {
        [key: string]: TotalPoints;
    }
}
