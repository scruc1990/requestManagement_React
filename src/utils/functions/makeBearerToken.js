/**
 * Función para crear un objeto con el token de autenticación para
 * añadirlo a las cabeceras de la petición
 *
 * @param {*} token Token de autenticación
 *
 * @returns {Object} Objeto con el token de autenticación
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const makeBearerToken = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};
