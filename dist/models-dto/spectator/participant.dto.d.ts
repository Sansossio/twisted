export declare class ParticipantDTO {
    /**
     * The ID of the profile icon used by this participant
     */
    profileIconId: number;
    /**
     * The ID of the champion played by this participant
     */
    championId: number;
    /**
     * The summoner name of this participant
     */
    summonerName: string;
    /**
     * Flag indicating whether or not this participant is a bot
     */
    bot: boolean;
    /**
     * The ID of the second summoner spell used by this participant
     */
    spell2Id: number;
    /**
     * The team ID of this participant, indicating the participant's team
     */
    teamId: number;
    /**
     * The ID of the first summoner spell used by this participant
     */
    spell1Id: number;
}
