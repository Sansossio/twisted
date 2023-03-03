export declare namespace MatchV5TimelineDTOs {
    export interface MatchTimelineDto {
        metadata: Metadata;
        info: Info;
    }
    export interface Info {
        frameInterval: number;
        frames: Frame[];
        gameId: number;
        participants: Participant[];
    }
    export interface Frame {
        events: Event[];
        participantFrames: {
            [key: string]: ParticipantFrame;
        };
        timestamp: number;
    }
    export interface Event {
        realTimestamp?: number;
        timestamp: number;
        type: EventType;
        level?: number;
        participantId?: number;
        itemId?: number;
        levelUpType?: LevelUpType;
        skillSlot?: number;
        afterId?: number;
        beforeId?: number;
        goldGain?: number;
        creatorId?: number;
        wardType?: WardType;
        assistingParticipantIds?: number[];
        bounty?: number;
        killStreakLength?: number;
        killerId?: number;
        position?: Position;
        victimDamageDealt?: VictimDamage[];
        victimDamageReceived?: VictimDamage[];
        victimId?: number;
        killType?: KillType;
        multiKillLength?: number;
        buildingType?: BuildingType;
        laneType?: LaneType;
        teamId?: number;
        towerType?: TowerType;
        gameId?: number;
        winningTeam?: number;
        killerTeamId?: number;
        monsterSubType?: string;
        monsterType?: string;
        name?: string;
    }
    type BuildingType = 'INHIBITOR_BUILDING' | 'TOWER_BUILDING';
    type KillType = 'KILL_ACE' | 'KILL_FIRST_BLOOD' | 'KILL_MULTI';
    type LaneType = 'BOT_LANE' | 'MID_LANE' | 'TOP_LANE';
    type LevelUpType = 'EVOLVE' | 'NORMAL';
    interface Position {
        x: number;
        y: number;
    }
    type TowerType = 'BASE_TURRET' | 'INNER_TURRET' | 'NEXUS_TURRET' | 'OUTER_TURRET';
    type EventType = 'BUILDING_KILL' | 'CHAMPION_KILL' | 'CHAMPION_SPECIAL_KILL' | 'DRAGON_SOUL_GIVEN' | 'ELITE_MONSTER_KILL' | 'GAME_END' | 'ITEM_DESTROYED' | 'ITEM_PURCHASED' | 'ITEM_SOLD' | 'ITEM_UNDO' | 'LEVEL_UP' | 'PAUSE_END' | 'SKILL_LEVEL_UP' | 'TURRET_PLATE_DESTROYED' | 'WARD_KILL' | 'WARD_PLACED';
    interface VictimDamage {
        basic: boolean;
        magicDamage: number;
        name: Name;
        participantId: number;
        physicalDamage: number;
        spellName: string;
        spellSlot: number;
        trueDamage: number;
        type: VictimDamageDealtType;
    }
    enum Name {
        Ashe = "Ashe",
        Braum = "Braum",
        Darius = "Darius",
        Evelynn = "Evelynn",
        Graves = "Graves",
        Gwen = "Gwen",
        HAAPChaosTurret = "HA_AP_ChaosTurret",
        HAAPChaosTurret2 = "HA_AP_ChaosTurret2",
        HAAPChaosTurret3 = "HA_AP_ChaosTurret3",
        HAAPOrderTurret = "HA_AP_OrderTurret",
        HAAPOrderTurret3 = "HA_AP_OrderTurret3",
        HAChaosMinionMelee = "HA_ChaosMinionMelee",
        HAChaosMinionRanged = "HA_ChaosMinionRanged",
        HAChaosMinionSiege = "HA_ChaosMinionSiege",
        HAChaosMinionSuper = "HA_ChaosMinionSuper",
        HAOrderMinionMelee = "HA_OrderMinionMelee",
        HAOrderMinionRanged = "HA_OrderMinionRanged",
        HAOrderMinionSiege = "HA_OrderMinionSiege",
        HAOrderMinionSuper = "HA_OrderMinionSuper",
        Jax = "Jax",
        Jinx = "Jinx",
        Kassadin = "Kassadin",
        Khazix = "Khazix",
        Lissandra = "Lissandra",
        Nami = "Nami",
        Nidalee = "Nidalee",
        Pyke = "Pyke",
        SRUAPTurretChaos1 = "SRUAP_Turret_Chaos1",
        SRUAPTurretOrder1 = "SRUAP_Turret_Order1",
        SRUChaosMinionMelee = "SRU_ChaosMinionMelee",
        SRUChaosMinionRanged = "SRU_ChaosMinionRanged",
        SRUChaosMinionSiege = "SRU_ChaosMinionSiege",
        SRUKrug = "SRU_Krug",
        SRUKrugMini = "SRU_KrugMini",
        SRUOrderMinionMelee = "SRU_OrderMinionMelee",
        SRUOrderMinionRanged = "SRU_OrderMinionRanged",
        SRUOrderMinionSiege = "SRU_OrderMinionSiege",
        SRURazorbeakMini = "SRU_RazorbeakMini",
        Sylas = "Sylas",
        TwistedFate = "TwistedFate",
        Varus = "Varus",
        Vayne = "Vayne",
        Yone = "Yone"
    }
    enum VictimDamageDealtType {
        Minion = "MINION",
        Monster = "MONSTER",
        Other = "OTHER",
        Tower = "TOWER"
    }
    enum WardType {
        BlueTrinket = "BLUE_TRINKET",
        ControlWard = "CONTROL_WARD",
        SightWard = "SIGHT_WARD",
        Undefined = "UNDEFINED",
        YellowTrinket = "YELLOW_TRINKET"
    }
    interface ParticipantFrame {
        championStats: {
            [key: string]: number;
        };
        currentGold: number;
        damageStats: {
            [key: string]: number;
        };
        goldPerSecond: number;
        jungleMinionsKilled: number;
        level: number;
        minionsKilled: number;
        participantId: number;
        position: Position;
        timeEnemySpentControlled: number;
        totalGold: number;
        xp: number;
    }
    interface Participant {
        participantId: number;
        puuid: string;
    }
    interface Metadata {
        dataVersion: string;
        matchId: string;
        participants: string[];
    }
    export {};
}
