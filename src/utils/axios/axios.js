import { addRequestInterceptor } from "./interceptor";

const BASE_URL = import.meta.env.BASE_URL;
const config = {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
};

export const axios = addRequestInterceptor(axios.create(config));

export const tokenAxios = addRequestInterceptor(axios.create(config));