import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useCurrentUser } from "../hooks/useCurrentUser";

/**
 * Dashboard page component.
 * @returns {JSX.Element} Dashboard page JSX element.
 */
export default function DashboardPage() {
    const navigate = useNavigate();
    const { setUserType } = useUser();
    const currentUser = useCurrentUser();

    /**
     * Sets the user type and navigates to the corresponding user profile page.
     * @param {number} userType - The type of user to navigate to.
     */
    const handleUserSelection = (userType) => {
        setUserType(userType);
        navigate(`/profile/user/${userType}`);
    };

    return (
        <>
            <div>
                <h1>Page d'accueil</h1>
                <br />
                <p>Sélectionnez un utilisateur : {currentUser}</p>
                <button onClick={() => handleUserSelection(12)}>
                    Utilisateur 12
                </button>
                <button onClick={() => handleUserSelection(18)}>
                    Utilisateur 18
                </button>
            </div>
        </>
    );
}
