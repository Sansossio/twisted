export declare namespace ConfigDTO {
    interface Config {
        /** Capstone & challenge id */
        id: number;
        /** Language metadata for challenge. */
        localizedNames: localizedNames;
        state?: string;
        tracking?: string;
        /** Unix timestamp. */
        startTimestamp?: number;
        endTimestamp?: number;
        /** Leaderboard tracking. */
        leaderboard: boolean;
        /** Level demarcation. */
        thresholds: thresholdsDto;
    }
    interface thresholdsDto {
        [key: string]: number;
    }
    interface localizedNames {
        [key: string]: localizedName;
    }
    interface localizedName {
        description: string;
        name: string;
        shortDescription: string;
    }
}
