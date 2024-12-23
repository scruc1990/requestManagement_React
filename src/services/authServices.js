import { publicAxios } from "@utils/axios/axios.js";

/**
 * Función para iniciar sesión
 * 
 * @param {*} param0
 * @param {string} param0.usuario Nombre de usuario
 * @param {string} param0.contraseña Contraseña de usuario
 *  
 * @returns <Promise> Datos de la sesión
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const login = async ({ usuario, contraseña }) => {
    const { data } = await publicAxios.post('/auth/login', { usuario, contraseña });
    return data;
}