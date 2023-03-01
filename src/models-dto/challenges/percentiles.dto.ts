export namespace PercentilesDTO {
   export interface Percentile {
      /** All challenges. */
      [key: string]: Percentiles 
   }

   export interface Percentiles {
      /** Percent distribution for a challenge. */
      [key: string]: number
   }
}