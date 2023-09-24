import { useCurrentUser } from "../hooks/useCurrentUser";
import { useUserData } from "../hooks/useUserServices";
import DailyActivity from "../components/DailyActivity/DailyActivity";
import SessionDuration from "../components/SessionDuration/SessionDuration";
import TypeActivity from "../components/TypeActivity/TypeActivity";
import AverageScore from "../components/AverageScore/AverageScore";

export default function Profile() {
    const currentUser = useCurrentUser();
    const { userData, loading, error } = useUserData(currentUser);
    const user = userData?.user;
    const activity = userData?.activity;
    const averageSessions = userData?.averageSessions;
    const performance = userData?.performance;

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Une erreur s'est produite : {error.message}</div>;
    }

    if (!userData) {
        return <div>Aucune donnée d'utilisateur disponible.</div>;
    }

    return (
        <>
            {userData && (
                <>
                    <div className="profile">
                        <h1 className="title">
                            Bonjour{" "}
                            <span className="title-name">
                                {user.userInfos.firstName}
                            </span>
                        </h1>
                        <p className="sub-title">
                            Félicitation ! Vous avez explosé vos objectifs hier
                            👏
                        </p>
                    </div>
                    <div className="activity-container">
                        <DailyActivity data={activity.sessions} />
                    </div>
                    <div className="charts-container">
                        <div className="session-duration">
                            <SessionDuration data={averageSessions.sessions} />
                        </div>
                        <div className="type-activity">
                            <TypeActivity data={performance} />
                        </div>
                        <div className="average-score">
                            <AverageScore
                                data={user.todayScore || user.score}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
