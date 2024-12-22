import { addRequestInterceptor } from "./interceptor";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const publicAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const tokenAxios = addRequestInterceptor(axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}));