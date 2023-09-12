import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function DashboardPage() {
    const navigate = useNavigate();
    const { setUserType } = useUser();
    const currentUser = useCurrentUser();

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
