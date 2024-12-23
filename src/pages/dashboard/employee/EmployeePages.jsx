import { useEmployee } from "@hooks/employee/useEmployee";
import TableComponent from "@components/generic/TableComponent";

/**
 * Componente para la página de empleados
 * 
 * @returns {JSX.Element}
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
const EmployeePages = () => {
    /**
     * Llamado al Hook para obtener los empleados
     */
    const {
        data,
        isLoading,
        isError,
        employeeColumns,
        employeeToolBar
    } =  useEmployee();

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold">Empleados</h1>
            <TableComponent 
                columns={employeeColumns}
                data={data}
                error={isError}
                loading={isLoading}
                toolbar={employeeToolBar}
            />
        </div>
    )
}

export default EmployeePages;