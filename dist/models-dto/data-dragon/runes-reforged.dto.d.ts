export declare class RunesReforgedDTO {
    id: number;
    key: string;
    icon: string;
    slots: {
        runes: RunesReforgedSlotsDTO[];
    };
}
export declare class RunesReforgedSlotsDTO {
    id: number;
    key: string;
    icon: string;
    name: string;
    shortDesc: string;
    longDesc: string;
}
