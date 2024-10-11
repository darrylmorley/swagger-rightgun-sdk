/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type stockLevel = {
    status?: stockLevel.status;
    count?: number;
};
export namespace stockLevel {
    export enum status {
        IN_STOCK = 'In stock',
        OUT_OF_STOCK = 'Out of stock',
    }
}

