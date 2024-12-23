import TableComponent from '@components/generic/TableComponent';
import { useRequest } from '@hooks/request/useRequest';

/**
 * Componente para la página de solicitudes
 *
 * @returns {JSX.Element}
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
const RequestPages = () => {
  /**
   * Llamado al Hook para obtener las solicitudes
   */
  const { requestToolBar, dataRequest, isLoading, isError, deleteRequests, requestColumns } =
    useRequest();

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
};

export default RequestPages;
