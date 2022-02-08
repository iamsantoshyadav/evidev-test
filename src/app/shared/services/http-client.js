import axios from "axios";
import { apiBaseUrl } from "@/environment"

/**
 * Axios configurations
 */
const config = {
    baseURL: apiBaseUrl
}

/**
 * This function can be used for authorization purpose
 * Desc - Append token before each requests
 */

const getAuthHash = () => {
    // Prepare hash
}

/**
 * Axios instance with configs
 */
const httpClient = axios.create(config);

/**
 * Auth Interceptors : Append header before each requests
 */
const authInterceptor = config => {
    config.headers.Authorization = getAuthHash()
    return config;
}

/**
 * Log Interceptors : Log all request
 */
const loggerInterceptor = config => {
    // Log here
    return config;
}

//** Adding the request interceptors */
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
    response => {
        /** Reject promise if API error ocurred */
        if (response.data.error) {
            return Promise.reject(response.data.error)
        }
        // Return API data
        return response.data;
    },
    error => {
        // Reject promise if any HTTP error ocured
        return Promise.reject(error);
    }
);

export {
    httpClient
}
