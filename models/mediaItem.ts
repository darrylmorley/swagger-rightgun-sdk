/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type mediaItem = {
    fileName?: string;
    url?: string;
    /**
     * item status in the store
     */
    type?: mediaItem.type;
};
export namespace mediaItem {
    /**
     * item status in the store
     */
    export enum type {
        IMAGE = 'image',
        VIDEO = 'video',
    }
}

