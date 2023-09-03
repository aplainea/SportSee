import API from "./api";

export const fetchUserById = async (userId) => {
    try {
        const response = await API.get(`/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchUserActivityById = async (userId) => {
    try {
        const response = await API.get(`/${userId}/activity`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
