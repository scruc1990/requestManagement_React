import requestColumns from "@utils/columns/requestColumns";
import employeeColumns from "@utils/columns/employeeColumns";
const TableComponent = ({ children }) => {
    const columnNames = employeeColumns;
    const grid = [
        {
            "id": 1000635463,
            "fecha_ingreso": "2023-01-01T00:00:00.000Z",
            "nombre": "Juan Pérez",
            "salario": "3000.00"
        },
        {
            "id": 1037625785,
            "fecha_ingreso": "2023-02-15T00:00:00.000Z",
            "nombre": "Ana Gómez",
            "salario": "3500.00"
        },
        {
            "id": 5094531,
            "fecha_ingreso": "2023-03-20T00:00:00.000Z",
            "nombre": "Carlos Díaz",
            "salario": "4000.00"
        },
        {
            "id": 11111,
            "fecha_ingreso": "2024-12-16T00:00:00.000Z",
            "nombre": "Pepito",
            "salario": "3000.00"
        },
        {
            "id": 11112,
            "fecha_ingreso": "2024-12-16T00:00:00.000Z",
            "nombre": "Pepito",
            "salario": "3000.00"
        },
        {
            "id": 11114,
            "fecha_ingreso": "2024-12-16T00:00:00.000Z",
            "nombre": "prueba",
            "salario": "3000.00"
        },
        {
            "id": 11164,
            "fecha_ingreso": "2024-12-16T00:00:00.000Z",
            "nombre": "prueba",
            "salario": "3000.00"
        },
        {
            "id": 11864,
            "fecha_ingreso": "2024-12-16T00:00:00.000Z",
            "nombre": "prueba",
            "salario": "3000.00"
        },
        {
            "id": 118664,
            "fecha_ingreso": "2024-12-16T00:00:00.000Z",
            "nombre": "prueba",
            "salario": "3000.00"
        }
    ];

    
    return (
        <table className="grid-table">
            <thead>
                <tr>
                    {columnNames.map((column, index) => (
                    <th key={index}>{column.name}</th>
                    ))}
                    { children && <th key={'action'}>Acción</th>}
                </tr>
            </thead>
            <tbody>
                {grid.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {columnNames.map((column) => (
                        <td key={column.key}>{row[column.key]}</td>
                    ))}
                    { children && <td key={'action'}>{children}</td>}
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default TableComponent;