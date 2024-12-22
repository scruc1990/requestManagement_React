import { Outlet } from "react-router-dom";

export default function AuthContainer() {

    return (
        <div>
            <h1>Auth Container</h1>
            <Outlet />
        </div>
    )
}