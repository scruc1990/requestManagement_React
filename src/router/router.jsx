import { createHashRouter } from "react-router-dom";
import { AuthPages, EmployeePages, RequestPages } from "./lazyRoutes";
import AuthContainer from "@containers/auth/AuthContainer";
import DashBoardContainer from "@containers/dashboard/DashBoardContainer";
import AuthWrapper from "@wrappers/authWrapper";

/**
 * Definición de las rutas de la aplicación
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const router = createHashRouter([
    {
        path: "/",
        element: (
            <AuthWrapper>
                <DashBoardContainer />
            </AuthWrapper>
            ),
        children: [
            {
                path: "/employee",
                element: <EmployeePages />,
            },
            {
                path: "/request",
                element: <RequestPages />,
            },
        ]

    },
    {
        path: "/auth",
        element: <AuthContainer />,
        children: [
            {
                path: "login",
                element: <AuthPages />,
            },
        ]
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>,
    }
    
]);