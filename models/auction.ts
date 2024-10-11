/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type auction = {
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
};

