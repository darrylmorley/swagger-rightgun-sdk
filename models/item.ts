/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type item = {
    reference?: string;
    serial?: string;
    catalogue: {
        category?: item.category;
        subCategory?: string;
        furtherCategory?: string;
    };
    eqipment?: {
        'make-model-varient'?: {
            make?: string;
            model?: string;
            variant?: string;
        };
        magnification?: string;
    };
    firearm?: {
        'make-model-varient'?: {
            make?: string;
            model?: string;
            variant?: string;
        };
        /**
         * This is the grade of the item. 1-8 are the options allowed. For example grade 8 would be exibition quaility, and 1 would be lowest standard of wood.
         */
        grade?: item.grade;
        /**
         * This is where the item originates from.
         */
        origin?: item.origin;
        /**
         * This is what side handed the item is.
         */
        orientation?: item.orientation;
        /**
         * The unit of measurement for the following fields.
         */
        barrelUnit?: item.barrelUnit;
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
        stocklUnit?: item.stocklUnit;
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
        weightUnit?: item.weightUnit;
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
        typeOfLicence?: item.typeOfLicence;
        calibre?: {
            calibre?: string;
            /**
             * the type of item for the given calibre
             */
            type?: item.type;
        };
        modifier?: {
            calibre?: {
                calibre?: string;
                /**
                 * the type of item for the given calibre
                 */
                type?: item.type;
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
            trigger?: item.trigger;
            /**
             * if the item has an ejector
             */
            ejector?: item.ejector;
            /**
             * the type of choke the item holds
             */
            choke?: item.choke;
            /**
             * Applicable for both fixed and multi choke.
             */
            choke1?: item.choke1;
            /**
             * Only applicable if the choke is fixed.
             */
            choke2?: item.choke2;
        };
    };
    modifier?: {
        calibre?: {
            calibre?: string;
            /**
             * the type of item for the given calibre
             */
            type?: item.type;
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
    description?: {
        /**
         * This is the description in a text format.
         */
        text?: string;
        /**
         * This is the description in a HTML format.
         */
        html?: string;
        /**
         * This is a small succinct summery of the item.
         */
        excerpt?: string;
    };
    /**
     * item status in the store
     */
    condition?: item.condition;
    /**
     * The year the item started
     */
    circa?: number;
    media?: {
        mediaItem?: {
            fileName?: string;
            url?: string;
            /**
             * item status in the store
             */
            type?: item.type;
        };
    };
    status?: {
        status?: item.status;
    };
    stockLevel?: {
        number?: number;
    };
};
export namespace item {
    export enum category {
        AIR_GUNS = 'Air guns',
        AMMUNITION = 'Ammunition',
        ARCHERY = 'Archery',
        ART_COLLECTIBLES = 'Art & Collectibles',
        CLAY = 'Clay',
        CLOTHING = 'Clothing',
        DOGS = 'Dogs',
        GUN_ACCESSORIES = 'Gun accessories',
        HANDGUNS = 'Handguns',
        HUNTING = 'Hunting',
        KNIVES = 'Knives',
        MODERATOR = 'Moderator',
        RIFLE = 'Rifle',
        SAFES_CABINETS = 'Safes & Cabinets',
        SHOTGUN = 'Shotgun',
        SIGHTS_OPTICS = 'Sights & Optics',
        THERMAL = 'Thermal',
        VEHICLE = 'Vehicle',
    }
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
    /**
     * item status in the store
     */
    export enum condition {
        NEW = 'New',
        USED = 'Used',
    }
    export enum status {
        ACTIVE = 'Active',
        ADVERTISED = 'Advertised',
        COMMISION = 'Commision',
        SOLD = 'Sold',
        REPAIR = 'Repair',
        SALE_OR_RETURN = 'Sale or return',
        BUY_OR_RECEIVE = 'Buy or receive',
        DISPOSE = 'Dispose',
        STORE = 'Store',
        LOSS = 'Loss',
        LEAND = 'Leand',
        DEPOSIT = 'Deposit',
        DEALER_TRANSFER = 'Dealer transfer',
    }
}

