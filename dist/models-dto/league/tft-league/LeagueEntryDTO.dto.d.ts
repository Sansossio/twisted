import { MiniSeriesDTO } from '../summoner-league';
export declare class LeagueEntryDTO {
    readonly leagueId: string;
    readonly summonerId: string;
    readonly summonerName: string;
    readonly queueType: string;
    readonly tier: string;
    readonly rank: string;
    readonly leaguePoints: number;
    readonly wins: number;
    readonly loses: number;
    readonly hotstreak: boolean;
    readonly veteran: boolean;
    readonly freshBlood: boolean;
    readonly inactive: boolean;
    readonly miniSeries?: MiniSeriesDTO;
}
