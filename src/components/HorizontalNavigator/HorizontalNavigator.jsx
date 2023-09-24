import logo from "../../assets/logo_sportsee.svg";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";

/**
 * Renders a horizontal navigation bar with links to different pages.
 * @returns {JSX.Element} The horizontal navigation bar component.
 */
export default function HorizontalNavigator() {
    /**
     * Retrieves the current user using the useCurrentUser hook.
     * @returns {Object} The current user object.
     */
    const currentUser = useCurrentUser();

    return (
        <>
            <header>
                <img src={logo} alt="logo" className="logo" />
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/profile/user/${currentUser}`}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Profil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/settings"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Réglage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/community"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Communauté
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
