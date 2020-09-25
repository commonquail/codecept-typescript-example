/// <reference types="codeceptjs" />

import * as axios from "axios"

declare global {
    namespace CodeceptJS {
        export interface REST {
            _executeRequest<T>(request: axios.AxiosRequestConfig): Promise<axios.AxiosResponse<T>>;

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
             * @param {number} newTimeout request timeout in milliseconds
             */
            setRequestTimeout(newTimeout: number): void;

            /**
             * Send GET request to REST API
             *
             * ```js
             * I.sendGetRequest('/api/users.json');
             * ```
             *
             * @param {string} url
             * @param {object} [headers={}] asdf
             */
            sendGetRequest<T>(url: string, headers?: Record<string, string>): Promise<axios.AxiosResponse<T>>;

            /**
             * Sends POST request to API.
             *
             * ```js
             * I.sendPostRequest('/api/users.json', { "email": "user@user.com" });
             * ```
             *
             * @param {string} url
             * @param {*} payload
             * @param {object} [headers={}] asdf
             * @return {Promise<AxiosResponse<T>>}
             */
            sendPostRequest<T>(url: string, payload?: any, headers?: Record<string, string>): Promise<axios.AxiosResponse<T>>;

            /**
             * Sends PATCH request to API.
             *
             * ```js
             * I.sendPatchRequest('/api/users.json', { "email": "user@user.com" });
             * ```
             *
             * @param {string} url
             * @param {object} payload
             * @param {object} headers
             */
            sendPatchRequest<T>(url: string, payload: any, headers?: Record<string, string>): Promise<axios.AxiosResponse<T>>;

            /**
             * Sends PUT request to API.
             *
             * ```js
             * I.sendPutRequest('/api/users.json', { "email": "user@user.com" });
             * ```
             *
             * @param {string} url
             * @param {object} payload
             * @param {object} headers
             */
            sendPutRequest<T>(url: string, payload?: any, headers?: Record<string, string>): Promise<axios.AxiosResponse<T>>;

            /**
             * Sends DELETE request to API.
             *
             * ```js
             * I.sendDeleteRequest('/api/users/1');
             * ```
             *
             * @param {*} url
             * @param {object} headers
             */
            sendDeleteRequest<T>(url: string, headers?: Record<string, string>): Promise<axios.AxiosResponse<T>>;

        }
    }

}
