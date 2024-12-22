import { useEmployee } from "@hooks/employee/useEmployee";
import TableComponent from "@components/generic/TableComponent";

const EmployeePages = () => {
    const {
        data,
        isLoading,
        isError,
        createEmployees,
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