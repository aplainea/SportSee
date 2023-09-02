import { Outlet } from "react-router-dom";
import HorizontalNavigator from "../components/HorizontalNavigator/HorizontalNavigator";
import VerticalNavigator from "../components/VerticalNavigator/VerticalNavigator";
import { UserProvider } from "../contexts/UserContext";

export default function DashboardPage() {
    return (
        <>
            <UserProvider>
                <div className="app">
                    <HorizontalNavigator />
                    <div className="container">
                        <VerticalNavigator />
                        <div className="page">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </UserProvider>
        </>
    );
}
