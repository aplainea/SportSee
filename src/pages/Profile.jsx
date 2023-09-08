import { useState, useEffect } from "react";
import { fetchUserActivityById, fetchUserById } from "../services/userService";
import { useCurrentUser } from "../hooks/useCurrentUser";
import DailyActivity from "../components/DailyActivity/DailyActivity";

export default function Profile() {
    const currentUser = useCurrentUser();

    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);

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
                    <div className="activity-container">
                        {userActivity && (
                            <DailyActivity data={userActivity.sessions} />
                        )}
                    </div>
                </>
            )}
        </>
    );
}
