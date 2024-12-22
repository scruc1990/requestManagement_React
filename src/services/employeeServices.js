import { tokenAxios } from '@utils/axios/axios';
import { makeBearerToken } from '@utils/functions/makeBearerToken.js';

export const getAllEmployees = async (token) => {
    const { data } = await tokenAxios.get('/employee', makeBearerToken(token));
    return data.data;
};

export const getEmployeeById = async (id) => {
    const { data } = await tokenAxios.get(`/employee/${id}`, makeBearerToken(token));
    return data;
}

export const createEmployee = async (employee, token) => {
    const { data } = await tokenAxios.post('/employee', employee, makeBearerToken(token));
    return data;
}