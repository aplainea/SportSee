import { useEffect, useState } from "react";
import {
    fetchUserById,
    fetchUserActivityById,
    fetchUserAverageSessionsById,
} from "../services/userService";

export const useUserData = (userId) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetchUserById(userId);
                const activityResponse = await fetchUserActivityById(userId);
                const averageSessionsResponse =
                    await fetchUserAverageSessionsById(userId);

                setUserData({
                    user: userResponse.data,
                    activity: activityResponse.data,
                    averageSessions: averageSessionsResponse.data,
                });
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return { userData: userData, loading, error };
};
