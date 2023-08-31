import { Outlet } from "react-router-dom";
import HorizontalNavigator from "../components/HorizontalNavigator";

export default function DashboardPage() {
    return (
        <>
            <div>
                <HorizontalNavigator />
                <Outlet />
            </div>
        </>
    );
}
