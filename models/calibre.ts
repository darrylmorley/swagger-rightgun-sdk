/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type calibre = {
    calibre?: string;
    /**
     * the type of item for the given calibre
     */
    type?: calibre.type;
};
export namespace calibre {
    /**
     * the type of item for the given calibre
     */
    export enum type {
        RIFLE = 'Rifle',
        SHOTGUN = 'Shotgun',
        AIRGUN = 'Airgun',
    }
}

