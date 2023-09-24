import axios from "axios";

/**
 * Axios instance for making API requests to the user endpoint.
 * @type {import('axios').AxiosInstance}
 */
const API = axios.create({
    baseURL: "http://localhost:3000/user/",
});

export default API;
