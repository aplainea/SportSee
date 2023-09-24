import API from "./api";

/**
 * Fetches data for a specific user from the API.
 * @param {number} userId - The ID of the user to fetch data for.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise} - A Promise that resolves with the fetched data.
 * @throws {Error} - If there was an error fetching the data.
 */
const fetchDataWithUserId = async (userId, endpoint) => {
    try {
        const response = await API.get(`/${userId}${endpoint}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetches user data by user ID.
 * @param {number} userId - The ID of the user to fetch data for.
 * @returns {Promise} A Promise that resolves with the user data.
 */
export const fetchUserById = async (userId) => {
    return fetchDataWithUserId(userId, "");
};

/**
 * Fetches user activity data by user ID.
 * @param {number} userId - The ID of the user to fetch activity data for.
 * @returns {Promise} A Promise that resolves with the user's activity data.
 */
export const fetchUserActivityById = async (userId) => {
    return fetchDataWithUserId(userId, "/activity");
};

/**
 * Fetches the average sessions of a user by their ID.
 * @param {string} userId - The ID of the user.
 * @returns {Promise} A promise that resolves to the fetched data.
 */
export const fetchUserAverageSessionsById = async (userId) => {
    return fetchDataWithUserId(userId, "/average-sessions");
};

/**
 * Fetches user performance data by user ID.
 * @param {number} userId - The ID of the user to fetch performance data for.
 * @returns {Promise} A Promise that resolves with the user's performance data.
 */
export const fetchUserPerformanceById = async (userId) => {
    return fetchDataWithUserId(userId, "/performance");
};
