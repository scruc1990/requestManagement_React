import { useEffect,useState } from "react";
import PropTypes from "prop-types";

const TableComponent = ({ columns, data, error, loading, children, toolbar }) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (loading) {
            setMessage('Cargando datos...');
        } else if (error) {
            setMessage('Error al cargar los datos');
        } else {
            setMessage('No hay datos');
        }
    }, [data, error, loading]);

    return (
        <div className="flex flex-col justify-items-start">
            {toolbar && <>{toolbar}</>}
            <table className="divide-y divide-gray-200 border border-gray-200">
                <thead className="bg-gray-50">   
                    <tr>
                        {columns.map((column, index) => (
                        <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{column.name}</th>
                        ))}
                        { children && <th key={'action'} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data ? data?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                        {columns?.map((column) => (
                            <td key={column.key} className="px-6 py-4 whitespace-nowrap">{row[column.key]}</td>
                        ))}
                        { children && <td key={'action'} className="px-6 py-4 whitespace-nowrap">{children}</td>}
                        </tr>
                    )) : <tr><td colSpan={columns.length + 1} className="px-6 py-4 whitespace-nowrap">{message}</td></tr>}
                </tbody>
            </table>
        </div>
    )
};

TableComponent.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array,
    error: PropTypes.bool.isRequired,
    children: PropTypes.node,
    loading: PropTypes.bool.isRequired,
    toolbar: PropTypes.node
};
export default TableComponent;