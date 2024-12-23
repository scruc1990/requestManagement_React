import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Instancia de axios para peticiones públicas
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const publicAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

/***
 * Instancia de axios para peticiones con token
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const tokenAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});
