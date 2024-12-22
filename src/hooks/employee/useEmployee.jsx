import { useTokenContext } from '@hooks/useTokenContext';
import { getAllEmployees, createEmployee } from '@services/employeeServices.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import employeeColumns from '@utils/columns/employeeColumns.js';
import ToolBarComponent from '@components/generic/ToolBarComponent';
import EmployeeForm from '@components/employee/employee-form/EmployeeForm';
import { useRef } from 'react';

export const useEmployee = () => {
    const queryClient = useQueryClient();
    const { token } = useTokenContext();
    const bottonRef = useRef();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['employee'],
        queryFn: () => getAllEmployees(token),
    });

    const createEmployees = useMutation({
        mutationFn: (values) => createEmployee(values, token),
        onSuccess: (response) => {

            if (!response.success) {
                alert(response.message);
            } else {
                alert('Empleado creado correctamente');
            }

            queryClient.invalidateQueries({ queryKey: ['employee'] });
        }
    })

    const employeeCreate = EmployeeForm(bottonRef, createEmployees.mutate);
    const employeeToolBar = ToolBarComponent(
        'Empleado',
        'Crear Empleado',
        'Ingrese los datos del empleado a crear:',
        bottonRef,
        employeeCreate);

    return {
        data,
        isLoading,
        isError,
        createEmployees,
        employeeColumns,
        employeeToolBar
    };
};