/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type sell = {
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
    sendConfirmation?: sell.sendConfirmation;
    /**
     * This will generate the Form 11, I have disposed and The customer has acquired, notice of transfer and then email to the police. From the platfrom you are able to manully download the pdf files. The defult is no.
     */
    sendNoticeOfTransfer?: sell.sendNoticeOfTransfer;
};
export namespace sell {
    /**
     * This will send the customer a record of the transaction. The defult is no.
     */
    export enum sendConfirmation {
        YES = 'yes',
        NO = 'no',
    }
    /**
     * This will generate the Form 11, I have disposed and The customer has acquired, notice of transfer and then email to the police. From the platfrom you are able to manully download the pdf files. The defult is no.
     */
    export enum sendNoticeOfTransfer {
        YES = 'yes',
        NO = 'no',
    }
}

