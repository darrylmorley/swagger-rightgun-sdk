/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type party = {
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

