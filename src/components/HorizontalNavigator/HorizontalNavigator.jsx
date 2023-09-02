import logo from "../../assets/logo_sportsee.svg";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";

export default function HorizontalNavigator() {
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
