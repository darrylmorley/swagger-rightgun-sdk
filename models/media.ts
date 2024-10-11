/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type media = {
    mediaItem?: {
        fileName?: string;
        url?: string;
        /**
         * item status in the store
         */
        type?: media.type;
    };
};
export namespace media {
    /**
     * item status in the store
     */
    export enum type {
        IMAGE = 'image',
        VIDEO = 'video',
    }
}

