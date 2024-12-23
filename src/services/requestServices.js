import { tokenAxios } from '@utils/axios/axios';
import { makeBearerToken } from '@utils/functions/makeBearerToken.js';

export const getAllRequests = async (token) => {
    const { data } = await tokenAxios.get('/request', makeBearerToken(token));
    return data.data;
};

export const createRequest = async (request, token) => {
    const { data } = await tokenAxios.post('/request', request, makeBearerToken(token));
    return data;
}

export const deleteRequest = async (id, token) => {
    const { data } = await tokenAxios.delete(`/request/${id}`, makeBearerToken(token));
    return data;
}