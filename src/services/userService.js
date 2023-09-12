import API from "./api";

const fetchDataWithUserId = async (userId, endpoint) => {
    try {
        const response = await API.get(`/${userId}${endpoint}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchUserById = async (userId) => {
    return fetchDataWithUserId(userId, "");
};

export const fetchUserActivityById = async (userId) => {
    return fetchDataWithUserId(userId, "/activity");
};
