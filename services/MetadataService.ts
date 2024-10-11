/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MetadataService {
    /**
     * Add a new calibre
     * creates a new calibre in the correct item
     * @param requestBody
     * @returns any Successful operation
     * @throws ApiError
     */
    public static createCalibre(
        requestBody?: Array<{
            calibre?: string;
            /**
             * the type of item for the given calibre
             */
            type?: 'Rifle' | 'Shotgun' | 'Airgun';
        }>,
    ): CancelablePromise<{
        calibre?: string;
        /**
         * the type of item for the given calibre
         */
        type?: 'Rifle' | 'Shotgun' | 'Airgun';
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/Metadata/calibre',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Logs user into the system
     * @param calibre The calibre
     * @param type the type of firearm for calibre e.g. shotgun for 12 Gauge
     * @param match This is how the data is matched to your input. Numbers only will remove all other character. For example 12 Gauge would return 12. If you select fuzzy, and put in 410, then 0.410 Gauge willl be found.
     * @returns any Successful operation
     * @throws ApiError
     */
    public static loginUser(
        calibre?: string,
        type?: 'Rifle' | 'Shotgun' | 'Airgun',
        match?: 'Fuzzy' | 'Numbers only',
    ): CancelablePromise<{
        calibre?: string;
        /**
         * the type of item for the given calibre
         */
        type?: 'Rifle' | 'Shotgun' | 'Airgun';
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Metadata/calibre',
            query: {
                'calibre': calibre,
                'type': type,
                'Match': match,
            },
            errors: {
                400: `Invalid calibre supplied`,
            },
        });
    }
    /**
     * Retrieves a list of all categories.
     * Retrieve catefory information.
     * @returns string Successful operation
     * @throws ApiError
     */
    public static getCategory(): CancelablePromise<'Air guns' | 'Ammunition' | 'Archery' | 'Art & Collectibles' | 'Clay' | 'Clothing' | 'Dogs' | 'Gun accessories' | 'Handguns' | 'Hunting' | 'Knives' | 'Moderator' | 'Rifle' | 'Safes & Cabinets' | 'Shotgun' | 'Sights & Optics' | 'Thermal' | 'Vehicle'> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Metadata/category',
            errors: {
                400: `Invalid calibre supplied`,
            },
        });
    }
    /**
     * Get subCategory
     * Returns all the subcategoies base on the category.
     * @param category Category for the subcategory
     * @returns string successful operation
     * @throws ApiError
     */
    public static getSubCategory(
        category: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Metadata/subCategory/{category}',
            path: {
                'category': category,
            },
            errors: {
                400: `Invalid category supplied`,
                404: `Category not found`,
            },
        });
    }
    /**
     * Add sub Category
     * Add a new sub Category.
     * @param category The subcategory for Category
     * @param subcategory The new subcateogry to be added
     * @returns string successful operation
     * @returns any successful operation
     * @throws ApiError
     */
    public static addSubCategory(
        category: 'Air guns' | 'Ammunition' | 'Archery' | 'Art & Collectibles' | 'Clay' | 'Clothing' | 'Dogs' | 'Gun accessories' | 'Handguns' | 'Hunting' | 'Knives' | 'Moderator' | 'Rifle' | 'Safes & Cabinets' | 'Shotgun' | 'Sights & Optics' | 'Thermal' | 'Vehicle',
        subcategory: string,
    ): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/Metadata/subCategory/{category}',
            path: {
                'category': category,
            },
            query: {
                'Subcategory': subcategory,
            },
        });
    }
    /**
     * Returns all further categories
     * Returns all the further categoies based on the sub category
     * @param subCategory Pass in the Sub Cateogry to retrieve all further categories.
     * @returns string successful operation
     * @throws ApiError
     */
    public static getFurtherCategory(
        subCategory: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Metadata/furtherCategory/{subCategory}:',
            path: {
                'subCategory': subCategory,
            },
            errors: {
                400: `Invalid sub category supplied`,
                404: `Sub category not found`,
            },
        });
    }
    /**
     * Add a new sub Category, under an existing category.
     * Add a new category.
     * @param subCategory The sub category to add the futher category against.
     * @param furtherCategory The new further cateogry to be added.
     * @returns string successful operation
     * @throws ApiError
     */
    public static addfurtherCategory(
        subCategory: string,
        furtherCategory: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/Metadata/furtherCategory/{subCategory}:',
            path: {
                'subCategory': subCategory,
            },
            query: {
                'furtherCategory': furtherCategory,
            },
            errors: {
                400: `Invalid sub category supplied`,
                404: `Sub category not found`,
            },
        });
    }
}
