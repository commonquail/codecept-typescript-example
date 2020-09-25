/// <reference types="codeceptjs" />

import * as axios from "axios"

// CodeceptJS's REST helper's methods ~all have wrong type definitions. They
// generally all lack appropriate JSDoc, which the types are inferred from.
// Because the return types depend on a third-party, I don't know how to fix
// the upstream type generation, so monkey-patch them instead.
//
// codeceptjs/CodeceptJS#2590

declare global {
    namespace CodeceptJS {
        /**
         * This is a trick to force callers to specify a type parameter (or
         * variable type). There are many ways to bypass it -- generally by
         * triggering method overloading -- but in the simplest form of usage
         * it works fairly reliably.
         *
         * @template R The response payload type
         * @see https://stackoverflow.com/a/51173322/482758
         */
        type NoInferResource<R> = string & (R extends void ? "Explicitly specify response type" : string);

        /** A dictionary of headers. */
        type Headers = Record<string, string>;

        export interface REST {
            /**
             * Executes axios request

             * @template R The response payload type
             * @param {axios.AxiosRequestConfig} request - The axios request to perform
             * @return {Promise<AxiosResponse<R>>}
             */
            _executeRequest<R = void>(request: axios.AxiosRequestConfig): Promise<axios.AxiosResponse<R>>;

            /**
             * Generates url based on format sent (takes endpoint + url if latter lacks 'http')
             *
             * @param {string} url
             */
            _url(url: string): string;

            /**
             * Set timeout for the request
             *
             * ```js
             * I.setRequestTimeout(10000); // In milliseconds
             * ```
             *
             * @param {number} newTimeout - Request timeout in milliseconds
             */
            setRequestTimeout(newTimeout: number): void;

            /**
             * Send GET request to REST API
             *
             * ```js
             * I.sendGetRequest('/api/users.json');
             * ```
             *
             * @template R The response payload type
             * @param {string} url - The absolute URL or relative path to query
             * @param {Record<string, string>} [headers={}] - Header key-values to include in the request
             * @return {Promise<axios.AxiosResponse<R>>}
             */
            sendGetRequest<R = void>(url: NoInferResource<R>, headers?: Headers): Promise<axios.AxiosResponse<R>>;

            /**
             * Sends POST request to API.
             *
             * ```js
             * I.sendPostRequest('/api/users.json', { "email": "user@user.com" });
             * ```
             *
             * @template T The request payload type
             * @template R The response payload type
             * @param {string} url - The absolute URL or relative path to query
             * @param {*} [payload={}] - The payload to POST
             * @param {Record<string, string>} [headers={}] - Header key-values to include in the request
             * @return {Promise<AxiosResponse<R>>}
             */
            sendPostRequest<T, R = void>(url: NoInferResource<R>, payload?: T, headers?: Record<string, string>): Promise<axios.AxiosResponse<R>>;

            /**
             * Sends PATCH request to API.
             *
             * ```js
             * I.sendPatchRequest('/api/users.json', { "email": "user@user.com" });
             * ```
             *
             * @template T The request payload type
             * @template R The response payload type
             * @param {string} url - The absolute URL or relative path to query
             * @param {*} payload - The payload to PATCH
             * @param {Record<string, string>} [headers={}] - Header key-values to include in the request
             * @return {Promise<AxiosResponse<R>>}
             */
            sendPatchRequest<T, R = void>(url: NoInferResource<R>, payload: T, headers?: Record<string, string>): Promise<axios.AxiosResponse<R>>;

            /**
             * Sends PUT request to API.
             *
             * ```js
             * I.sendPutRequest('/api/users.json', { "email": "user@user.com" });
             * ```
             *
             * @template T The request payload type
             * @template R The response payload type
             * @param {string} url - The absolute URL or relative path to query
             * @param {*} [payload={}] - The payload to PUT
             * @param {Record<string, string>} [headers={}] - Header key-values to include in the request
             * @return {Promise<AxiosResponse<R>>}
             */
            sendPutRequest<T, R = void>(url: NoInferResource<R>, payload?: T, headers?: Record<string, string>): Promise<axios.AxiosResponse<R>>;

            /**
             * Sends DELETE request to API.
             *
             * ```js
             * I.sendDeleteRequest('/api/users/1');
             * ```
             *
             * @template R The response payload type
             * @param {string} url - The absolute URL or relative path to query
             * @param {Record<string, string>} [headers={}] - Header key-values to include in the request
             * @return {Promise<AxiosResponse<R>>}
             */
            sendDeleteRequest<R = void>(url: NoInferResource<R>, headers?: Record<string, string>): Promise<axios.AxiosResponse<R>>;
        }
    }

}
