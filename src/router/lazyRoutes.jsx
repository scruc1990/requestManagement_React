import { lazy } from 'react';

export const AuthPages = lazy(() => import('@pages/auth/AuthPages'));
export const EmployeePages = lazy(() => import('@pages/dashboard/employee/EmployeePages'));
export const RequestPages = lazy(() => import('@pages/dashboard/request/RequestPages'));