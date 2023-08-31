import logo from "../assets/logo_sportsee.svg";
import { NavLink } from "react-router-dom";

export default function HorizontalNavigator() {
    return (
        <>
            <header>
                <img src={logo} alt="arrow-left" className="logo" />
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" activeClassName="active">
                                Profil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" activeClassName="active">
                                Réglage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/community" activeClassName="active">
                                Communauté
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
