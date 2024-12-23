import TableComponent from "@components/generic/TableComponent";
import { useRequest } from "@hooks/request/useRequest";
import { useReducer } from "react";

const RequestPages = () => {
    const {
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
                action={deleteRequests}
            />
        </div>
    );
}

export default RequestPages;