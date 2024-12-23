import { useEffect,useState } from "react";
import DeleteButton from "@components/generic/DeleteButtonComponent";
import PropTypes from "prop-types";

const TableComponent = ({ columns, data, error, loading, action, toolbar }) => {
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

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const paginatedData = data?.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(data?.length / pageSize)) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <div className="flex flex-col justify-items-start pb-8">
            {toolbar && <>{toolbar}</>}
            <table className="divide-y divide-gray-200 border border-gray-200">
                <thead className="bg-gray-50">   
                    <tr>
                        {columns.map((column, index) => (
                        <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{column.name}</th>
                        ))}
                        { action && <th key={'action'} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedData?.length > 0 ? paginatedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.key} className="px-6 py-4 whitespace-nowrap">{row[column.key]}</td>
                        ))}

                        { action && <td key={'action'} className="px-6 py-4 whitespace-nowrap"><DeleteButton click={action.mutate} id={row.id}/></td>}
                        </tr>
                    )) : <tr><td colSpan={columns?.length + 1} className="px-6 py-4 whitespace-nowrap text-center">{message}</td></tr>}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <button 
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 1} 
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {Math.ceil(data?.length / pageSize)}</span>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === Math.ceil(data?.length / pageSize)} 
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
};

TableComponent.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array,
    error: PropTypes.bool.isRequired,
    children: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    toolbar: PropTypes.node
};
export default TableComponent;