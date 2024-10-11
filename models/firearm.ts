/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type firearm = {
    'make-model-varient'?: {
        make?: string;
        model?: string;
        variant?: string;
    };
    /**
     * This is the grade of the item. 1-8 are the options allowed. For example grade 8 would be exibition quaility, and 1 would be lowest standard of wood.
     */
    grade?: firearm.grade;
    /**
     * This is where the item originates from.
     */
    origin?: firearm.origin;
    /**
     * This is what side handed the item is.
     */
    orientation?: firearm.orientation;
    /**
     * The unit of measurement for the following fields.
     */
    barrelUnit?: firearm.barrelUnit;
    /**
     * The length of the barrel. For example if the barrel is 15.5cm then only 15 would be passed here.
     */
    barrel?: number;
    /**
     * The length of the barrel. For example if the barrel is 15.5cm then only 5 would be passed here.
     */
    barrelPoint?: number;
    /**
     * The unit of measurement for the following fields.
     */
    stocklUnit?: firearm.stocklUnit;
    /**
     * The length of the barrel. For example if the barrel is 15.5cm then only 15 would be passed here.
     */
    stock?: number;
    /**
     * The length of the barrel. For example if the barrel is 15.5cm then only 5 would be passed here.
     */
    stockPoint?: number;
    /**
     * The unit of measurement for the following fields.
     */
    weightUnit?: firearm.weightUnit;
    /**
     * The length of the barrel. For example if the barrel is 15.5cm then only 15 would be passed here.
     */
    weight?: number;
    /**
     * The length of the barrel. For example if the barrel is 15.5cm then only 5 would be passed here.
     */
    weightPoint?: number;
    Cased?: string;
    /**
     * item status in the store
     */
    typeOfLicence?: firearm.typeOfLicence;
    calibre?: {
        calibre?: string;
        /**
         * the type of item for the given calibre
         */
        type?: firearm.type;
    };
    modifier?: {
        calibre?: {
            calibre?: string;
            /**
             * the type of item for the given calibre
             */
            type?: firearm.type;
        };
        'make-model-varient'?: {
            make?: string;
            model?: string;
            variant?: string;
        };
    };
    scope?: {
        magnification?: string;
        'make-model-varient'?: {
            make?: string;
            model?: string;
            variant?: string;
        };
    };
    shotgun?: {
        /**
         * This is the grade of the item. 1-8 are the options allowed. For example grade 8 would be exibition quaility, and 1 would be lowest standard of wood.
         */
        trigger?: firearm.trigger;
        /**
         * if the item has an ejector
         */
        ejector?: firearm.ejector;
        /**
         * the type of choke the item holds
         */
        choke?: firearm.choke;
        /**
         * Applicable for both fixed and multi choke.
         */
        choke1?: firearm.choke1;
        /**
         * Only applicable if the choke is fixed.
         */
        choke2?: firearm.choke2;
    };
};
export namespace firearm {
    /**
     * This is the grade of the item. 1-8 are the options allowed. For example grade 8 would be exibition quaility, and 1 would be lowest standard of wood.
     */
    export enum grade {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
    }
    /**
     * This is where the item originates from.
     */
    export enum origin {
        AUSTRIA = 'Austria',
        BELGIUM = 'Belgium',
        BRAZIL = 'Brazil',
        CHINA = 'China',
        CZECHIA = 'Czechia',
        FINLAND = 'Finland',
        FRANCE = 'France',
        GERMANY = 'Germany',
        ITALY = 'Italy',
        JAPAN = 'Japan',
        RUSSIA = 'Russia',
        SLOVAKIA = 'Slovakia',
        SPAIN = 'Spain',
        TURKEY = 'Turkey',
        UNKNOWN = 'Unknown',
        USA = 'USA',
        UK = 'UK',
    }
    /**
     * This is what side handed the item is.
     */
    export enum orientation {
        LEFT_HANDED = 'Left Handed',
        AMBIDEXTROUS = 'Ambidextrous',
        CENTRE_VISION = 'Centre Vision',
        RIGHT_HANDED = 'Right Handed',
        X_OVER = 'X-Over',
        UNIVERSAL = 'Universal',
    }
    /**
     * The unit of measurement for the following fields.
     */
    export enum barrelUnit {
        INCH = 'Inch',
        CENTIMETERS = 'Centimeters',
    }
    /**
     * The unit of measurement for the following fields.
     */
    export enum stocklUnit {
        INCH = 'Inch',
        CENTIMETERS = 'Centimeters',
    }
    /**
     * The unit of measurement for the following fields.
     */
    export enum weightUnit {
        POUNDS_OZ = 'Pounds-Oz',
        KG_G = 'Kg-g',
    }
    /**
     * item status in the store
     */
    export enum typeOfLicence {
        AIRGUN = 'Airgun',
        FIREARM = 'Firearm',
        PROHIBITED_WEAPONS_AND_AMMUNITION = 'Prohibited weapons and ammunition',
        REGISTERED_FIREARMS_DEALER_RFD_ = 'Registered Firearms Dealer (RFD)',
        SHOTGUN = 'Shotgun',
        TEMPORARY_PERMIT = 'Temporary permit',
        NO_LICENCE = 'No Licence',
    }
    /**
     * the type of item for the given calibre
     */
    export enum type {
        RIFLE = 'Rifle',
        SHOTGUN = 'Shotgun',
        AIRGUN = 'Airgun',
    }
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

