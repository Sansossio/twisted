export declare namespace PercentilesDTO {
    interface Percentile {
        /** All challenges. */
        [key: string]: Percentiles;
    }
    interface Percentiles {
        /** Percent distribution for a challenge. */
        [key: string]: number;
    }
}
