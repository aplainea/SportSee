import { Outlet } from "react-router-dom";
import HorizontalNavigator from "../components/HorizontalNavigator/HorizontalNavigator";
import VerticalNavigator from "../components/VerticalNavigator/VerticalNavigator";
import { UserProvider } from "../contexts/UserContext";

/**
 * Renders the main application component.
 * @returns {JSX.Element} The main application component.
 */
export default function App() {
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
