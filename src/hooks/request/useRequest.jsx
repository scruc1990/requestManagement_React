import { useEmployee } from "@hooks/employee/useEmployee";
import { useTokenContext } from "@hooks/useTokenContext";
import { getAllRequests, createRequest, deleteRequest } from "@services/requestServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import requestColumns from "@utils/columns/requestColumns";
import ToolBarComponent from "@components/generic/ToolBarComponent";
import { useRef } from "react";
import RequestForm from "@components/request/request-form/RequestForm";

export const useRequest = () => {
    const queryClient = useQueryClient();
    const { token } = useTokenContext();
    const bottonRef = useRef();
    const { data: employeeList } = useEmployee();

    const { data: dataRequest, isLoading, isError } = useQuery({
        queryKey: ['request'],
        queryFn: () => getAllRequests(token),
    });

    const createRequests = useMutation({
        mutationFn: (values) => createRequest(values, token),
        onSuccess: (response) => {

            if (!response.success) {
                alert(response.message);
            } else {
                alert('Solicitud creada correctamente');
            }

            queryClient.invalidateQueries({ queryKey: ['request'] });
        }
    });

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

    const requestCreate = RequestForm(bottonRef, createRequests.mutate, employeeList);
    const requestToolBar = ToolBarComponent(
        'Solicitud',
        'Crear Solicitud',
        'Ingrese los datos de la solicitud a crear:',
        bottonRef,
        requestCreate);

    return {
        employeeList,
        requestToolBar,
        dataRequest,
        isLoading,
        isError,
        deleteRequests,
        requestColumns
    }
};