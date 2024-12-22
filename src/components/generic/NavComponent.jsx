import { useTokenContext } from "@hooks/useTokenContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavComponent = () => {
    const navigate = useNavigate();
    const { setToken } = useTokenContext();

    const logout = () => {
        setToken(null);
        navigate("/auth/login");
    }

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100">
            <ul className="flex list-none m-0 p-0">
                <li className="mr-5">
                    <Link to="/employee" className="no-underline text-blue-500">Empleados</Link>
                </li>
                <li>
                    <Link to="/request" className="no-underline text-blue-500">Solicitudes</Link>
                </li>
            </ul>
            <button onClick={logout} className="rounded bg-red-600 text-white border-none py-2 px-4 cursor-pointer">Cerrar sesión</button>
        </nav>
    );
}

export default NavComponent;