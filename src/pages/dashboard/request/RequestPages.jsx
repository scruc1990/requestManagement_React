import TableComponent from "@components/generic/TableComponent";
import { useRequest } from "@hooks/request/useRequest";
import { useReducer } from "react";

const RequestPages = () => {
    const {
        employeeList,
        requestToolBar,
        dataRequest,
        isLoading,
        isError,
        deleteRequests,
        requestColumns
    } = useRequest();

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold">Solicitudes</h1>
            <TableComponent 
                columns={requestColumns}
                data={dataRequest}
                error={isError}
                loading={isLoading}
                toolbar={requestToolBar}
            />
        </div>
    );
}

export default RequestPages;