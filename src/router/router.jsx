import { createHashRouter } from "react-router-dom";
import { AuthPages, EmployeePages, RequestPages } from "./lazyRoutes";
import AuthContainer from "@containers/auth/AuthContainer";
import DashBoardContainer from "@containers/dashboard/DashBoardContainer";

export const router = createHashRouter([
    {
        path: "/",
        element: <DashBoardContainer />,
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
    }
    
]);