export declare class UnitDto {
    /**
     * Unit tier.
     */
    tier: number;
    /**
     * A list of the unit's items. Please refer to the Teamfight Tactics documentation for item ids.
     */
    items: number[];
    /**
     * This field was introduced in patch 9.22 with data_version 2.
     */
    character_id: string;
    /**
     * If a unit is chosen as part of the Fates set mechanic,
     * the chosen trait will be indicated by this field.
     * Otherwise this field is excluded from the response.
     */
    chosen?: string;
    /**
     * Unit name.
     */
    name: string;
    /**
     * Unit rarity. This doesn't equate to the unit cost.
     */
    rarity: number;
}
