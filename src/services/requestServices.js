import { tokenAxios } from '@utils/axios/axios';
import { makeBearerToken } from '@utils/functions/makeBearerToken.js';

/**
 * Función para obtener todas las solicitudes
 *
 * @param {*} token Token de autenticación
 *
 * @returns <Promise> Datos de las solicitudes
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const getAllRequests = async (token) => {
  const { data } = await tokenAxios.get('/request', makeBearerToken(token));
  return data.data;
};

/**
 * Función para crear una solicitud
 * @param {*} request datos de la solicitud a crear
 * @param {*} token Token de autenticación
 * @returns <Promise> Datos de la solicitud creada
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const createRequest = async (request, token) => {
  const { data } = await tokenAxios.post('/request', request, makeBearerToken(token));
  return data;
};

/**
 * Función para eliminar una solicitud
 *
 * @param {*} id id de la solicitud a eliminar
 * @param {*} token Token de aut
 * @returns <Promise> Datos de la solicitud eliminada
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const deleteRequest = async (id, token) => {
  const { data } = await tokenAxios.delete(`/request/${id}`, makeBearerToken(token));
  return data;
};
