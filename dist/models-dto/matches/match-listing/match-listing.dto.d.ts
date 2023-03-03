import { MatchListingMatches } from './match-listing-matches.dto';
export declare class MatchListingDto {
    /**
     * Matches listing
     */
    matches: MatchListingMatches[];
    /**
     * Total games
     */
    totalGames: number;
    /**
     * Start index
     */
    startIndex: number;
    /**
     * End index
     */
    endIndex: number;
}
