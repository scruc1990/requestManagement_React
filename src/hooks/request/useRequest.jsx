import { useEmployee } from '@hooks/employee/useEmployee';
import { useTokenContext } from '@hooks/context/useTokenContext';
import { getAllRequests, createRequest, deleteRequest } from '@services/requestServices';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import requestColumns from '@utils/columns/requestColumns';
import ToolBarComponent from '@components/generic/ToolBarComponent';
import { useRef, useState } from 'react';
import RequestForm from '@components/request/request-form/RequestForm';

/***
 * Custom hook para manejar la lógica de las solicitudes
 *
 * @returns {
 * employeeList,     -- Lista de empleados
 * requestToolBar,   -- Barra de herramientas de solicitudes
 * dataRequest,      -- Datos de las solicitudes
 * isLoading,        -- Estado de carga
 * isError,          -- Estado de error
 * deleteRequests,   -- Función para eliminar solicitudes
 * requestColumns    -- Columnas de la tabla de solicitudes
 * }
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const useRequest = () => {
  const queryClient = useQueryClient();
  const [status, setStatus] = useState(false);
  const { token } = useTokenContext();
  const bottonRef = useRef();
  const { data: employeeList } = useEmployee();

  /**
   * Consulta para obtener las solicitudes
   */
  const {
    data: dataRequest,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['request'],
    queryFn: () => getAllRequests(token)
  });

  /**
   * Mutación para crear solicitudes
   */
  const createRequests = useMutation({
    mutationFn: (values) => createRequest(values, token),
    onSuccess: (response) => {
      if (!response.success) {
        alert(response.message);
      } else {
        setStatus(true);
        alert('Solicitud creada correctamente');
      }

      queryClient.invalidateQueries({ queryKey: ['request'] });
    }
  });

  /**
   * Mutación para eliminar solicitudes
   */
  const deleteRequests = useMutation({
    mutationFn: (id) => deleteRequest(id, token),
    onSuccess: (response) => {
      if (!response.success) {
        alert(response.message);
      } else {
        alert('Solicitud eliminada correctamente');
      }

      queryClient.invalidateQueries({ queryKey: ['request'] });
    }
  });

  /**
   * Componente para crear solicitudes
   */
  const requestCreate = RequestForm(bottonRef, createRequests.mutate, employeeList);

  /**
   * Componente de la barra de herramientas de solicitudes
   */
  const requestToolBar = ToolBarComponent(
    'Solicitud',
    'Crear Solicitud',
    'Ingrese los datos de la solicitud a crear:',
    bottonRef,
    requestCreate,
    status
  );

  return {
    employeeList,
    requestToolBar,
    dataRequest,
    isLoading,
    isError,
    deleteRequests,
    requestColumns
  };
};
