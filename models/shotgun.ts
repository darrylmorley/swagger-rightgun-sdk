/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type shotgun = {
    /**
     * This is the grade of the item. 1-8 are the options allowed. For example grade 8 would be exibition quaility, and 1 would be lowest standard of wood.
     */
    trigger?: shotgun.trigger;
    /**
     * if the item has an ejector
     */
    ejector?: shotgun.ejector;
    /**
     * the type of choke the item holds
     */
    choke?: shotgun.choke;
    /**
     * Applicable for both fixed and multi choke.
     */
    choke1?: shotgun.choke1;
    /**
     * Only applicable if the choke is fixed.
     */
    choke2?: shotgun.choke2;
};
export namespace shotgun {
    /**
     * This is the grade of the item. 1-8 are the options allowed. For example grade 8 would be exibition quaility, and 1 would be lowest standard of wood.
     */
    export enum trigger {
        SINGLE = 'single',
        DOUBLE = 'double',
    }
    /**
     * if the item has an ejector
     */
    export enum ejector {
        YES = 'yes',
        NO = 'no',
    }
    /**
     * the type of choke the item holds
     */
    export enum choke {
        FIXED = 'Fixed',
        MULTI = 'multi',
    }
    /**
     * Applicable for both fixed and multi choke.
     */
    export enum choke1 {
        _1_1_FULL = '1/1 Full',
        _1_2_MODIFIED = '1/2 Modified',
        _1_4_IMPROVED_CYLINDER = '1/4 Improved  Cylinder',
        _1_8_SKEET = '1/8 Skeet',
        _3_4_IMPROVED_MODIFIED = '3/4 Improved Modified',
        _3_8_LIGHT_MODIFIED = '3/8 light Modified',
        _5_8_LIGHT_IMPROVED_MODIFIED = '5/8 Light Improved Modified',
        _7_8_LIGHT_FULL = '7/8 Light full',
        ATA = 'ATA',
        BAILEY_INVECTOR_PLUS = 'Bailey Invector Plus',
        BERETTA_MOBILCHOKE = 'Beretta Mobilchoke',
        BERETTA_OPTIMA = 'Beretta Optima',
        BROWNING_INVECTOR_DS = 'Browning Invector DS',
        BROWNING_INVECTOR_PLUS = 'Browning Invector Plus',
        CYLINDER_NO_CHOKE_ = 'Cylinder (no choke)',
        EXTRA_FULL = 'Extra Full',
        NAPIER = 'Napier',
        OPTIMA_HP = 'Optima HP',
        SUPER_CYLINDER = 'Super Cylinder',
        TEAGUE_INVECTOR_DS = 'Teague Invector DS',
        TEAGUE_INVECTOR_PLUS = 'Teague Invector Plus',
        TEAGUE_MOBILCHOKE = 'Teague Mobilchoke',
        TEAGUE_OPTIMA = 'Teague Optima',
        TEAGUE_RIZZINI_LONG = 'Teague Rizzini Long',
        TEAGUE_RIZZINI_SHORT = 'Teague Rizzini Short',
        TEAGUE_RIZZINI_TYPE_C = 'Teague Rizzini Type C',
        TURKEY = 'Turkey',
        TWIST_RATE_10 = 'Twist Rate 10',
        TWIST_RATE_12 = 'Twist Rate 12',
    }
    /**
     * Only applicable if the choke is fixed.
     */
    export enum choke2 {
        _1_1_FULL = '1/1 Full',
        _1_2_MODIFIED = '1/2 Modified',
        _1_4_IMPROVED_CYLINDER = '1/4 Improved  Cylinder',
        _1_8_SKEET = '1/8 Skeet',
        _3_4_IMPROVED_MODIFIED = '3/4 Improved Modified',
        _3_8_LIGHT_MODIFIED = '3/8 light Modified',
        _5_8_LIGHT_IMPROVED_MODIFIED = '5/8 Light Improved Modified',
        _7_8_LIGHT_FULL = '7/8 Light full',
        ATA = 'ATA',
        BAILEY_INVECTOR_PLUS = 'Bailey Invector Plus',
        BERETTA_MOBILCHOKE = 'Beretta Mobilchoke',
        BERETTA_OPTIMA = 'Beretta Optima',
        BROWNING_INVECTOR_DS = 'Browning Invector DS',
        BROWNING_INVECTOR_PLUS = 'Browning Invector Plus',
        CYLINDER_NO_CHOKE_ = 'Cylinder (no choke)',
        EXTRA_FULL = 'Extra Full',
        NAPIER = 'Napier',
        OPTIMA_HP = 'Optima HP',
        SUPER_CYLINDER = 'Super Cylinder',
        TEAGUE_INVECTOR_DS = 'Teague Invector DS',
        TEAGUE_INVECTOR_PLUS = 'Teague Invector Plus',
        TEAGUE_MOBILCHOKE = 'Teague Mobilchoke',
        TEAGUE_OPTIMA = 'Teague Optima',
        TEAGUE_RIZZINI_LONG = 'Teague Rizzini Long',
        TEAGUE_RIZZINI_SHORT = 'Teague Rizzini Short',
        TEAGUE_RIZZINI_TYPE_C = 'Teague Rizzini Type C',
        TURKEY = 'Turkey',
        TWIST_RATE_10 = 'Twist Rate 10',
        TWIST_RATE_12 = 'Twist Rate 12',
    }
}

