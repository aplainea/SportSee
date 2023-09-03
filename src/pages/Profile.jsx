import { useState, useEffect } from "react";
import { fetchUserActivityById, fetchUserById } from "../services/userService";
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const currentUser = useCurrentUser();

    useEffect(() => {
        Promise.all([
            fetchUserById(currentUser),
            fetchUserActivityById(currentUser),
        ])
            .then(([userDataResponse, activityResponse]) => {
                setUserData(userDataResponse.data);
                setUserActivity(activityResponse.data);
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
                    <div className="profile-card">
                        {userActivity && (
                            <div>
                                <br />
                                <h2>Vos données de session :</h2>
                                <br />
                                <ul>
                                    {userActivity.sessions.map(
                                        (session, index) => (
                                            <li key={index}>
                                                Date : {session.day}
                                                <br />
                                                Kilogrammes : {session.kilogram}
                                                <br />
                                                Calories : {session.calories}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
