/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemService {
    /**
     * Add a new item to the Armory
     * Add a new Armory item. By default the stock level will be set to 1, and the stock status will be set to In stock. Further changes to stock levels can be set via item/stock/
     * @param requestBody Create a new item
     * @returns any Successful operation
     * @throws ApiError
     */
    public static addItem(
        requestBody: {
            reference?: string;
            serial?: string;
            catalogue: {
                category?: 'Air guns' | 'Ammunition' | 'Archery' | 'Art & Collectibles' | 'Clay' | 'Clothing' | 'Dogs' | 'Gun accessories' | 'Handguns' | 'Hunting' | 'Knives' | 'Moderator' | 'Rifle' | 'Safes & Cabinets' | 'Shotgun' | 'Sights & Optics' | 'Thermal' | 'Vehicle';
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
                grade?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
                /**
                 * This is where the item originates from.
                 */
                origin?: 'Austria' | 'Belgium' | 'Brazil' | 'China' | 'Czechia' | 'Finland' | 'France' | 'Germany' | 'Italy' | 'Japan' | 'Russia' | 'Slovakia' | 'Spain' | 'Turkey' | 'Unknown' | 'USA' | 'UK';
                /**
                 * This is what side handed the item is.
                 */
                orientation?: 'Left Handed' | 'Ambidextrous' | 'Centre Vision' | 'Right Handed' | 'X-Over' | 'Universal';
                /**
                 * The unit of measurement for the following fields.
                 */
                barrelUnit?: 'Inch' | 'Centimeters';
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
                stocklUnit?: 'Inch' | 'Centimeters';
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
                weightUnit?: 'Pounds-Oz' | 'Kg-g';
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
                typeOfLicence?: 'Airgun' | 'Firearm' | 'Prohibited weapons and ammunition' | 'Registered Firearms Dealer (RFD)' | 'Shotgun' | 'Temporary permit' | 'No Licence';
                calibre?: {
                    calibre?: string;
                    /**
                     * the type of item for the given calibre
                     */
                    type?: 'Rifle' | 'Shotgun' | 'Airgun';
                };
                modifier?: {
                    calibre?: {
                        calibre?: string;
                        /**
                         * the type of item for the given calibre
                         */
                        type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
                    trigger?: 'single' | 'double';
                    /**
                     * if the item has an ejector
                     */
                    ejector?: 'yes' | 'no';
                    /**
                     * the type of choke the item holds
                     */
                    choke?: 'Fixed' | 'multi';
                    /**
                     * Applicable for both fixed and multi choke.
                     */
                    choke1?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
                    /**
                     * Only applicable if the choke is fixed.
                     */
                    choke2?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
                };
            };
            modifier?: {
                calibre?: {
                    calibre?: string;
                    /**
                     * the type of item for the given calibre
                     */
                    type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
            condition?: 'New' | 'Used';
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
                    type?: 'image' | 'video';
                };
            };
            status?: {
                status?: 'Active' | 'Advertised' | 'Commision' | 'Sold' | 'Repair' | 'Sale or return' | 'Buy or receive' | 'Dispose' | 'Store' | 'Loss' | 'Leand' | 'Deposit' | 'Dealer transfer';
            };
            stockLevel?: {
                number?: number;
            };
        },
    ): CancelablePromise<{
        ID?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/item',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                405: `Invalid input`,
            },
        });
    }
    /**
     * Advertise the item with a price.
     * Add the price attributes to the item, and place the advertisement.
     * @param reference Advertise the item based on the reference. The reference is your internal id, used initality to create the item.
     * @param requestBody Create a new advertisement with a price
     * @returns any Successful operation
     * @throws ApiError
     */
    public static addItemPrice(
        reference: string,
        requestBody?: {
            /**
             * The price the public can buy this item for.
             */
            pricePublic?: number;
            /**
             * This the price you would sell to a trade account. This information will not be displayed to a non trade account.
             */
            priceTrade?: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/item/advertisement/{reference}',
            path: {
                'reference': reference,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                405: `Invalid input`,
            },
        });
    }
    /**
     * Advertise the item as an auction.
     * Add the auction attributes to the item, and place the advertisement.
     * @param reference Advertise the item based on the reference. The reference is your internal id, used initality to create the item.
     * @param requestBody Create a new advertisement with a price
     * @returns any Successful operation
     * @throws ApiError
     */
    public static addItemAution(
        reference: string,
        requestBody?: {
            /**
             * The reserve price e.g. 300. No bid below this prices will win the item
             */
            reserve?: number;
            /**
             * The length of time an auction will run for, 1-365 days
             */
            duration?: number;
            /**
             * When someone bids this is the amount of bid more they will offer
             */
            increment?: number;
            /**
             * The starting price for the item. e.g. 500.
             */
            starting?: number;
            /**
             * The buy now price. This is the price you will be willing to accept, to allow the action to end early. This is optional. If no price is added the user will not have the option to by now and the person who made the highest bid at the end time will win.
             */
            buy?: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/item/auction/{reference}',
            path: {
                'reference': reference,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                405: `Invalid input`,
            },
        });
    }
    /**
     * Sell the item.
     * Once an item is sold the advertisement will end and the status of the item will be set to Sold.
     * @param reference Sell the item based on the reference. The reference is your internal id, used initality to create the item.
     * @param requestBody Sells the item and kicks off further sell process.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static sellItem(
        reference: string,
        requestBody?: {
            /**
             * The actual date the item was sold.
             */
            date?: string;
            /**
             * The price the you (the dealer) sold the item. This is used in VAT calculations.
             */
            priceSell?: number;
            /**
             * The price the you (the dealer) bought the item.This is used in VAT calculations.
             */
            pricePurchase?: number;
            /**
             * This is either a supplier or customer
             */
            party?: {
                /**
                 * The parties title e.g. Mr
                 */
                title?: string;
                /**
                 * The parties first name e.g. John
                 */
                firstName?: string;
                /**
                 * The parties last name e.g. Smith
                 */
                lastName?: string;
                /**
                 * The parties last name e.g. Smith
                 */
                email?: string;
                /**
                 * The mobile number e.g. 075078 44444
                 */
                mobile?: string;
                /**
                 * The physical address
                 */
                address?: {
                    street?: string;
                    city?: string;
                    state?: string;
                    postcode?: string;
                };
            };
            /**
             * Any adhoc notes or infomation about this sell process.
             */
            notes?: string;
            /**
             * This will send the customer a record of the transaction. The defult is no.
             */
            sendConfirmation?: 'yes' | 'no';
            /**
             * This will generate the Form 11, I have disposed and The customer has acquired, notice of transfer and then email to the police. From the platfrom you are able to manully download the pdf files. The defult is no.
             */
            sendNoticeOfTransfer?: 'yes' | 'no';
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/item/sell/{reference}',
            path: {
                'reference': reference,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                405: `Invalid input`,
            },
        });
    }
    /**
     * Get an item by its reference number
     * @param reference Get the item based on the reference. The reference is your internal id, used initality to create the item.
     * @returns any successful operation
     * @throws ApiError
     */
    public static getItemByReference(
        reference: string,
    ): CancelablePromise<{
        reference?: string;
        serial?: string;
        catalogue: {
            category?: 'Air guns' | 'Ammunition' | 'Archery' | 'Art & Collectibles' | 'Clay' | 'Clothing' | 'Dogs' | 'Gun accessories' | 'Handguns' | 'Hunting' | 'Knives' | 'Moderator' | 'Rifle' | 'Safes & Cabinets' | 'Shotgun' | 'Sights & Optics' | 'Thermal' | 'Vehicle';
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
            grade?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
            /**
             * This is where the item originates from.
             */
            origin?: 'Austria' | 'Belgium' | 'Brazil' | 'China' | 'Czechia' | 'Finland' | 'France' | 'Germany' | 'Italy' | 'Japan' | 'Russia' | 'Slovakia' | 'Spain' | 'Turkey' | 'Unknown' | 'USA' | 'UK';
            /**
             * This is what side handed the item is.
             */
            orientation?: 'Left Handed' | 'Ambidextrous' | 'Centre Vision' | 'Right Handed' | 'X-Over' | 'Universal';
            /**
             * The unit of measurement for the following fields.
             */
            barrelUnit?: 'Inch' | 'Centimeters';
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
            stocklUnit?: 'Inch' | 'Centimeters';
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
            weightUnit?: 'Pounds-Oz' | 'Kg-g';
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
            typeOfLicence?: 'Airgun' | 'Firearm' | 'Prohibited weapons and ammunition' | 'Registered Firearms Dealer (RFD)' | 'Shotgun' | 'Temporary permit' | 'No Licence';
            calibre?: {
                calibre?: string;
                /**
                 * the type of item for the given calibre
                 */
                type?: 'Rifle' | 'Shotgun' | 'Airgun';
            };
            modifier?: {
                calibre?: {
                    calibre?: string;
                    /**
                     * the type of item for the given calibre
                     */
                    type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
                trigger?: 'single' | 'double';
                /**
                 * if the item has an ejector
                 */
                ejector?: 'yes' | 'no';
                /**
                 * the type of choke the item holds
                 */
                choke?: 'Fixed' | 'multi';
                /**
                 * Applicable for both fixed and multi choke.
                 */
                choke1?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
                /**
                 * Only applicable if the choke is fixed.
                 */
                choke2?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
            };
        };
        modifier?: {
            calibre?: {
                calibre?: string;
                /**
                 * the type of item for the given calibre
                 */
                type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
        condition?: 'New' | 'Used';
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
                type?: 'image' | 'video';
            };
        };
        status?: {
            status?: 'Active' | 'Advertised' | 'Commision' | 'Sold' | 'Repair' | 'Sale or return' | 'Buy or receive' | 'Dispose' | 'Store' | 'Loss' | 'Leand' | 'Deposit' | 'Dealer transfer';
        };
        stockLevel?: {
            number?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/item/reference/{reference}',
            path: {
                'reference': reference,
            },
            errors: {
                400: `Invalid tag value`,
            },
        });
    }
    /**
     * Find item by ID
     * Returns a single item by the ID
     * @param id ID of item to return
     * @returns any successful operation
     * @throws ApiError
     */
    public static getItemyById(
        id: number,
    ): CancelablePromise<{
        reference?: string;
        serial?: string;
        catalogue: {
            category?: 'Air guns' | 'Ammunition' | 'Archery' | 'Art & Collectibles' | 'Clay' | 'Clothing' | 'Dogs' | 'Gun accessories' | 'Handguns' | 'Hunting' | 'Knives' | 'Moderator' | 'Rifle' | 'Safes & Cabinets' | 'Shotgun' | 'Sights & Optics' | 'Thermal' | 'Vehicle';
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
            grade?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
            /**
             * This is where the item originates from.
             */
            origin?: 'Austria' | 'Belgium' | 'Brazil' | 'China' | 'Czechia' | 'Finland' | 'France' | 'Germany' | 'Italy' | 'Japan' | 'Russia' | 'Slovakia' | 'Spain' | 'Turkey' | 'Unknown' | 'USA' | 'UK';
            /**
             * This is what side handed the item is.
             */
            orientation?: 'Left Handed' | 'Ambidextrous' | 'Centre Vision' | 'Right Handed' | 'X-Over' | 'Universal';
            /**
             * The unit of measurement for the following fields.
             */
            barrelUnit?: 'Inch' | 'Centimeters';
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
            stocklUnit?: 'Inch' | 'Centimeters';
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
            weightUnit?: 'Pounds-Oz' | 'Kg-g';
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
            typeOfLicence?: 'Airgun' | 'Firearm' | 'Prohibited weapons and ammunition' | 'Registered Firearms Dealer (RFD)' | 'Shotgun' | 'Temporary permit' | 'No Licence';
            calibre?: {
                calibre?: string;
                /**
                 * the type of item for the given calibre
                 */
                type?: 'Rifle' | 'Shotgun' | 'Airgun';
            };
            modifier?: {
                calibre?: {
                    calibre?: string;
                    /**
                     * the type of item for the given calibre
                     */
                    type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
                trigger?: 'single' | 'double';
                /**
                 * if the item has an ejector
                 */
                ejector?: 'yes' | 'no';
                /**
                 * the type of choke the item holds
                 */
                choke?: 'Fixed' | 'multi';
                /**
                 * Applicable for both fixed and multi choke.
                 */
                choke1?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
                /**
                 * Only applicable if the choke is fixed.
                 */
                choke2?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
            };
        };
        modifier?: {
            calibre?: {
                calibre?: string;
                /**
                 * the type of item for the given calibre
                 */
                type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
        condition?: 'New' | 'Used';
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
                type?: 'image' | 'video';
            };
        };
        status?: {
            status?: 'Active' | 'Advertised' | 'Commision' | 'Sold' | 'Repair' | 'Sale or return' | 'Buy or receive' | 'Dispose' | 'Store' | 'Loss' | 'Leand' | 'Deposit' | 'Dealer transfer';
        };
        stockLevel?: {
            number?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/item/{Id}',
            path: {
                'Id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Item not found`,
            },
        });
    }
    /**
     * Find item status by ID
     * Returns a single item
     * @param id ID of item to return
     * @returns any successful operation
     * @throws ApiError
     */
    public static getItemStatusById(
        id: number,
    ): CancelablePromise<{
        reference?: string;
        serial?: string;
        catalogue: {
            category?: 'Air guns' | 'Ammunition' | 'Archery' | 'Art & Collectibles' | 'Clay' | 'Clothing' | 'Dogs' | 'Gun accessories' | 'Handguns' | 'Hunting' | 'Knives' | 'Moderator' | 'Rifle' | 'Safes & Cabinets' | 'Shotgun' | 'Sights & Optics' | 'Thermal' | 'Vehicle';
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
            grade?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
            /**
             * This is where the item originates from.
             */
            origin?: 'Austria' | 'Belgium' | 'Brazil' | 'China' | 'Czechia' | 'Finland' | 'France' | 'Germany' | 'Italy' | 'Japan' | 'Russia' | 'Slovakia' | 'Spain' | 'Turkey' | 'Unknown' | 'USA' | 'UK';
            /**
             * This is what side handed the item is.
             */
            orientation?: 'Left Handed' | 'Ambidextrous' | 'Centre Vision' | 'Right Handed' | 'X-Over' | 'Universal';
            /**
             * The unit of measurement for the following fields.
             */
            barrelUnit?: 'Inch' | 'Centimeters';
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
            stocklUnit?: 'Inch' | 'Centimeters';
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
            weightUnit?: 'Pounds-Oz' | 'Kg-g';
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
            typeOfLicence?: 'Airgun' | 'Firearm' | 'Prohibited weapons and ammunition' | 'Registered Firearms Dealer (RFD)' | 'Shotgun' | 'Temporary permit' | 'No Licence';
            calibre?: {
                calibre?: string;
                /**
                 * the type of item for the given calibre
                 */
                type?: 'Rifle' | 'Shotgun' | 'Airgun';
            };
            modifier?: {
                calibre?: {
                    calibre?: string;
                    /**
                     * the type of item for the given calibre
                     */
                    type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
                trigger?: 'single' | 'double';
                /**
                 * if the item has an ejector
                 */
                ejector?: 'yes' | 'no';
                /**
                 * the type of choke the item holds
                 */
                choke?: 'Fixed' | 'multi';
                /**
                 * Applicable for both fixed and multi choke.
                 */
                choke1?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
                /**
                 * Only applicable if the choke is fixed.
                 */
                choke2?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
            };
        };
        modifier?: {
            calibre?: {
                calibre?: string;
                /**
                 * the type of item for the given calibre
                 */
                type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
        condition?: 'New' | 'Used';
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
                type?: 'image' | 'video';
            };
        };
        status?: {
            status?: 'Active' | 'Advertised' | 'Commision' | 'Sold' | 'Repair' | 'Sale or return' | 'Buy or receive' | 'Dispose' | 'Store' | 'Loss' | 'Leand' | 'Deposit' | 'Dealer transfer';
        };
        stockLevel?: {
            number?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/item/status/{Id}',
            path: {
                'Id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `item not found`,
            },
        });
    }
    /**
     * Update an existing armory item
     * Update an item status by Armoury ID.
     * @param id ID of item to return
     * @returns any Successful operation
     * @throws ApiError
     */
    public static updateItemStatusById(
        id: number,
    ): CancelablePromise<{
        reference?: string;
        serial?: string;
        catalogue: {
            category?: 'Air guns' | 'Ammunition' | 'Archery' | 'Art & Collectibles' | 'Clay' | 'Clothing' | 'Dogs' | 'Gun accessories' | 'Handguns' | 'Hunting' | 'Knives' | 'Moderator' | 'Rifle' | 'Safes & Cabinets' | 'Shotgun' | 'Sights & Optics' | 'Thermal' | 'Vehicle';
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
            grade?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
            /**
             * This is where the item originates from.
             */
            origin?: 'Austria' | 'Belgium' | 'Brazil' | 'China' | 'Czechia' | 'Finland' | 'France' | 'Germany' | 'Italy' | 'Japan' | 'Russia' | 'Slovakia' | 'Spain' | 'Turkey' | 'Unknown' | 'USA' | 'UK';
            /**
             * This is what side handed the item is.
             */
            orientation?: 'Left Handed' | 'Ambidextrous' | 'Centre Vision' | 'Right Handed' | 'X-Over' | 'Universal';
            /**
             * The unit of measurement for the following fields.
             */
            barrelUnit?: 'Inch' | 'Centimeters';
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
            stocklUnit?: 'Inch' | 'Centimeters';
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
            weightUnit?: 'Pounds-Oz' | 'Kg-g';
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
            typeOfLicence?: 'Airgun' | 'Firearm' | 'Prohibited weapons and ammunition' | 'Registered Firearms Dealer (RFD)' | 'Shotgun' | 'Temporary permit' | 'No Licence';
            calibre?: {
                calibre?: string;
                /**
                 * the type of item for the given calibre
                 */
                type?: 'Rifle' | 'Shotgun' | 'Airgun';
            };
            modifier?: {
                calibre?: {
                    calibre?: string;
                    /**
                     * the type of item for the given calibre
                     */
                    type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
                trigger?: 'single' | 'double';
                /**
                 * if the item has an ejector
                 */
                ejector?: 'yes' | 'no';
                /**
                 * the type of choke the item holds
                 */
                choke?: 'Fixed' | 'multi';
                /**
                 * Applicable for both fixed and multi choke.
                 */
                choke1?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
                /**
                 * Only applicable if the choke is fixed.
                 */
                choke2?: '1/1 Full' | '1/2 Modified' | '1/4 Improved  Cylinder' | '1/8 Skeet' | '3/4 Improved Modified' | '3/8 light Modified' | '5/8 Light Improved Modified' | '7/8 Light full' | 'ATA' | 'Bailey Invector Plus' | 'Beretta Mobilchoke' | 'Beretta Optima' | 'Browning Invector DS' | 'Browning Invector Plus' | 'Cylinder (no choke)' | 'Extra Full' | 'Napier' | 'Optima HP' | 'Super Cylinder' | 'Teague Invector DS' | 'Teague Invector Plus' | 'Teague Mobilchoke' | 'Teague Optima' | 'Teague Rizzini Long' | 'Teague Rizzini Short' | 'Teague Rizzini Type C' | 'Turkey' | 'Twist Rate 10' | 'Twist Rate 12';
            };
        };
        modifier?: {
            calibre?: {
                calibre?: string;
                /**
                 * the type of item for the given calibre
                 */
                type?: 'Rifle' | 'Shotgun' | 'Airgun';
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
        condition?: 'New' | 'Used';
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
                type?: 'image' | 'video';
            };
        };
        status?: {
            status?: 'Active' | 'Advertised' | 'Commision' | 'Sold' | 'Repair' | 'Sale or return' | 'Buy or receive' | 'Dispose' | 'Store' | 'Loss' | 'Leand' | 'Deposit' | 'Dealer transfer';
        };
        stockLevel?: {
            number?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/item/status/{Id}',
            path: {
                'Id': id,
            },
            errors: {
                400: `Invalid ID or reference supplied`,
                404: `item not found`,
                405: `Validation exception`,
            },
        });
    }
    /**
     * Find item by reference
     * Returns a single item by reference
     * @param reference reference of item to return
     * @returns any successful operation
     * @throws ApiError
     */
    public static getItemStutusByReference(
        reference: string,
    ): CancelablePromise<{
        status?: 'Active' | 'Advertised' | 'Commision' | 'Sold' | 'Repair' | 'Sale or return' | 'Buy or receive' | 'Dispose' | 'Store' | 'Loss' | 'Leand' | 'Deposit' | 'Dealer transfer';
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/item/status/reference/{reference}',
            path: {
                'reference': reference,
            },
            errors: {
                400: `Invalid reference supplied`,
                404: `item not found`,
            },
        });
    }
    /**
     * Update the status of existing armory item
     * Update an item status by reference.
     * @param reference reference of item to return
     * @param status The status
     * @returns any Successful operation
     * @throws ApiError
     */
    public static updateItemStatusByReference(
        reference: string,
        status?: string,
    ): CancelablePromise<{
        status?: 'Active' | 'Advertised' | 'Commision' | 'Sold' | 'Repair' | 'Sale or return' | 'Buy or receive' | 'Dispose' | 'Store' | 'Loss' | 'Leand' | 'Deposit' | 'Dealer transfer';
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/item/status/reference/{reference}',
            path: {
                'reference': reference,
            },
            query: {
                'status': status,
            },
            errors: {
                400: `Invalid reference supplied`,
                404: `item not found`,
                405: `Validation exception`,
            },
        });
    }
    /**
     * Find items status by ID
     * Returns a single item status by id and the count
     * @param id ID of the item
     * @returns any successful operation
     * @throws ApiError
     */
    public static getItemStockById(
        id: number,
    ): CancelablePromise<{
        status?: 'In stock' | 'Out of stock';
        count?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/item/stock/{ID}',
            path: {
                'ID': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `item not found`,
            },
        });
    }
    /**
     * Update an existing item stock levels
     * Update an items stock levels by ID.
     * @param requestBody Update an existing item status in the Armoury.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static updateItemStockById(
        requestBody?: {
            status?: 'In stock' | 'Out of stock';
            count?: number;
        },
    ): CancelablePromise<{
        status?: 'In stock' | 'Out of stock';
        count?: number;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/item/stock/{ID}',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid ID or reference supplied`,
                404: `item not found`,
                405: `Validation exception`,
            },
        });
    }
    /**
     * Find item by reference
     * Returns a single item by reference
     * @param reference reference of items stock levels to return
     * @returns any successful operation
     * @throws ApiError
     */
    public static getItemStockByReference(
        reference: number,
    ): CancelablePromise<{
        status?: 'In stock' | 'Out of stock';
        count?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/item/stock/reference/{reference}',
            path: {
                'reference': reference,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `item not found`,
            },
        });
    }
    /**
     * Update an existing items stock levels
     * Update an item stock levels by reference.
     * @param requestBody Update an existing item stock level.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static updateItemStockByReference(
        requestBody?: {
            status?: 'In stock' | 'Out of stock';
            count?: number;
        },
    ): CancelablePromise<{
        status?: 'In stock' | 'Out of stock';
        count?: number;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/item/stock/reference/{reference}',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid ID or reference supplied`,
                404: `item not found`,
                405: `Validation exception`,
            },
        });
    }
}
