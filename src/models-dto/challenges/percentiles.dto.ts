export namespace PercentilesDTO {
   export interface Percentile {
      [key: string]: Percentiles 
   }

   export interface Percentiles {
      [key: string]: number
   }
}