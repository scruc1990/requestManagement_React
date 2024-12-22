import { useTokenContext } from "@hooks/useTokenContext";

const onRequest = (config) => {
    const { token } = useTokenContext();
    addToken(config, token);
    return config;
};

const addToken = (config, token) => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
};

const onRequestError = (error) => {
    return Promise.reject(error);
};


export function addRequestInterceptor(axiosInstance) {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
}