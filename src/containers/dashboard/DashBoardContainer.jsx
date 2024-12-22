import { Outlet } from "react-router-dom";
import NavComponent from "@components/generic/navComponent";

export default function DashBoardContainer() {

    return (
        <div>
            <NavComponent />
            <Outlet />
        </div>
    )
}