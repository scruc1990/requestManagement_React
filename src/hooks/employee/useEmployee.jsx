import { useTokenContext } from '@hooks/context/useTokenContext';
import { getAllEmployees, createEmployee } from '@services/employeeServices.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import employeeColumns from '@utils/columns/employeeColumns.js';
import ToolBarComponent from '@components/generic/ToolBarComponent';
import EmployeeForm from '@components/employee/employee-form/EmployeeForm';
import { useRef, useState } from 'react';

/**
 * Custom hook para manejar la lógica de los empleados
 * 
 * @returns {
 * data,            -- Datos de los empleados
 * isLoading,       -- Estado de carga
 * isError,         -- Estado de error
 * createEmployees, -- Función para crear empleados
 * employeeColumns, -- Columnas de la tabla de empleados
 * employeeToolBar  -- Barra de herramientas de empleados
 * } 
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const useEmployee = () => {
    const queryClient = useQueryClient();
    const [status, setStatus] = useState(false);
    const { token } = useTokenContext();
    const bottonRef = useRef();

    /**
     * Consulta para obtener los empleados
     */
    const { data, isLoading, isError } = useQuery({
        queryKey: ['employee'],
        queryFn: () => getAllEmployees(token),
    });

    /**
     * Mutación para crear empleados
     */
    const createEmployees = useMutation({
        mutationFn: (values) => createEmployee(values, token),
        onSuccess: (response) => {

            if (!response.success) {
                alert(response.message);
            } else {
                setStatus(true);
                alert('Empleado creado correctamente');
            }

            queryClient.invalidateQueries({ queryKey: ['employee'] });
        }
    })

    /**
     * Componente para crear empleados
     */
    const employeeCreate = EmployeeForm(bottonRef, createEmployees.mutate);
    
    /**
     * Componente de la barra de herramientas de empleados
     */
    const employeeToolBar = ToolBarComponent(
        'Empleado',
        'Crear Empleado',
        'Ingrese los datos del empleado a crear:',
        bottonRef,
        employeeCreate,
        status);

    return {
        data,
        isLoading,
        isError,
        createEmployees,
        employeeColumns,
        employeeToolBar
    };
};