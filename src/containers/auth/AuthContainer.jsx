import { Outlet } from "react-router-dom";

/**
 * Contenedor para la autenticación
 * 
 * @returns {JSX.Element}
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22 
 */
export default function AuthContainer() {

    return (
        <div className="flex items-center justify-center">
            <Outlet />
        </div>
    )
}