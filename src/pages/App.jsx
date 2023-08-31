import { Outlet } from "react-router-dom";
import HorizontalNavigator from "../components/HorizontalNavigator/HorizontalNavigator";
import VerticalNavigator from "../components/VerticalNavigator/VerticalNavigator";

export default function DashboardPage() {
    return (
        <>
            <div className="app">
                <HorizontalNavigator />
                <div className="container">
                    <VerticalNavigator />
                    <div className="page">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
