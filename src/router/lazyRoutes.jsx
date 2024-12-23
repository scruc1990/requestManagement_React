import { lazy } from 'react';
/**
 * Importación de lazy routes oara la carga de las paginas
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const AuthPages = lazy(() => import('@pages/auth/AuthPages'));
export const EmployeePages = lazy(() => import('@pages/dashboard/employee/EmployeePages'));
export const RequestPages = lazy(() => import('@pages/dashboard/request/RequestPages'));