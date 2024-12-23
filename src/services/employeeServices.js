import { tokenAxios } from '@utils/axios/axios';
import { makeBearerToken } from '@utils/functions/makeBearerToken.js';

/**
 * Función para obtener todos los empleados
 * 
 * @param {*} token Token de autenticación 
 * @returns <Promise> Datos de los empleados
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const getAllEmployees = async (token) => {
    const { data } = await tokenAxios.get('/employee', makeBearerToken(token));
    return data.data;
};

/**
 * Función para crear un empleado
 * 
 * @param {*} employee datos del empleado a crear 
 * @param {*} token Token de autenticación
 * @returns <Promise> Datos del empleado creado
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const createEmployee = async (employee, token) => {
    const { data } = await tokenAxios.post('/employee', employee, makeBearerToken(token));
    return data;
}