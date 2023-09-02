import { useState, useEffect } from "react";
import { fetchUserById } from "../services/userService";
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const currentUser = useCurrentUser();

    useEffect(() => {
        fetchUserById(currentUser)
            .then((data) => {
                setUserData(data.data);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des données de l'utilisateur :",
                    error
                );
            });
    }, [currentUser]);

    return (
        <>
            {userData && (
                <>
                    <div className="profile">
                        <h1 className="title">
                            Bonjour{" "}
                            <span className="title-name">
                                {userData.userInfos.firstName}
                            </span>
                        </h1>
                        <p className="sub-title">
                            Félicitation ! Vous avez explosé vos objectifs hier
                            👏
                        </p>
                    </div>
                </>
            )}
        </>
    );
}
