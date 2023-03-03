export declare class TraitDto {
    /**
     * Total tiers for the trait.
     */
    tier_total: number;
    /**
     * Trait name.
     */
    name: string;
    /**
     * Current active tier for the trait.
     */
    tier_current: number;
    /**
     * Number of units with this trait.
     */
    num_units: number;
    /**
     * Current style for this trait. (0 = No style, 1 = Bronze, 2 = Silver, 3 = Gold, 4 = Chromatic)
     */
    style: number;
}
