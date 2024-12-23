import { Outlet } from "react-router-dom";
import NavComponent from "@components/generic/navComponent";

/**
 * Contenedor para el dashboard
 * 
 * @returns {JSX.Element} 
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export default function DashBoardContainer() {

    return (
        <div>
            <NavComponent />
            <Outlet />
        </div>
    )
}