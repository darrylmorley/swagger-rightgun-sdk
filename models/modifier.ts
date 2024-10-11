/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type modifier = {
    calibre?: {
        calibre?: string;
        /**
         * the type of item for the given calibre
         */
        type?: modifier.type;
    };
    'make-model-varient'?: {
        make?: string;
        model?: string;
        variant?: string;
    };
};
export namespace modifier {
    /**
     * the type of item for the given calibre
     */
    export enum type {
        RIFLE = 'Rifle',
        SHOTGUN = 'Shotgun',
        AIRGUN = 'Airgun',
    }
}

