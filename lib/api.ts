import axios, { AxiosInstance } from 'axios';
import playwrightConfig from "../playwright.config";
import { randomUUID } from 'crypto';

if (!playwrightConfig?.use?.baseURL) {
    throw new Error("Base URL is not defined in Playwright config.");
}

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: playwrightConfig.use.baseURL,
    validateStatus: () => true,
});

axiosInstance.interceptors.request.use(function(config) {
    const separator = '#'.repeat(50);
    const requestId = randomUUID();
    const requestStartTime = new Date();

    config.headers['RequestUUID'] = requestId;
    config.headers['RequestStartTime'] = requestStartTime.valueOf().toString();

    const logData = {
        requestId,
        requestStartTime: requestStartTime.toLocaleTimeString(),
        url: `${config.baseURL}${config.url}`,
        method: config.method.toUpperCase(),
        data: config.data,
    };

    const message = [separator, 'REQUEST:', JSON.stringify(logData, null, 2), separator].join('\n');
    console.log(message);

    return config;
}, function(error) {
    console.error(error);

    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function(response) {
    const separator = '#'.repeat(50);
    const requestId = response.config.headers!['RequestUUID'];
    const requestStartTime = Number(response.config.headers!['RequestStartTime']);
    const elapsedTime = (Date.now() - requestStartTime) / 1000;

    const logData = {
        status: response.status,
        statusText: response.statusText,
        requestId,
        elapsedTime: `${elapsedTime} sec`,
        responseData: response.data,
    };

    const message = [separator, 'RESPONSE:', JSON.stringify(logData, null, 2), separator].join('\n');
    console.log(message);

    return response;
}, function(error) {
    console.error(error);

    return Promise.reject(error);
});