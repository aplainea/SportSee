import API from "./api";

export const fetchUserById = async (userId) => {
    try {
        const response = await API.get(`/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
