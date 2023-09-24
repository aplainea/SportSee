import { useEffect, useState } from "react";
import {
    fetchUserById,
    fetchUserActivityById,
    fetchUserAverageSessionsById,
    fetchUserPerformanceById,
} from "../services/userService";

/**
 * Custom hook to fetch user data by user ID.
 *
 * @param {number} userId - The ID of the user to fetch data for.
 * @returns {Object} An object containing user data, loading state, and error state.
 */
export const useUserData = (userId) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        /**
         * Fetches user data by ID and sets it to state.
         * @async
         * @function fetchData
         * @returns {Promise<void>}
         */
        const fetchData = async () => {
            try {
                const userResponse = await fetchUserById(userId);
                const activityResponse = await fetchUserActivityById(userId);
                const averageSessionsResponse =
                    await fetchUserAverageSessionsById(userId);
                const performanceResponse = await fetchUserPerformanceById(
                    userId
                );

                setUserData({
                    user: userResponse.data,
                    activity: activityResponse.data,
                    averageSessions: averageSessionsResponse.data,
                    performance: performanceResponse.data,
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
