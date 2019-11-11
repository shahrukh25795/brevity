import axios from "axios"
import { baseUrl as baseURL } from '../Constants/contants'

const requestInstance = axios.create({ baseURL, headers: null });

requestInstance.interceptors.request.use((config) => {
    return config;
},
    (error) => {
        return Promise.reject(error);
    });
requestInstance.interceptors.response.use((response) => {
    return response;
},
    (error) => {
        return Promise.reject(error);
    });

export default requestInstance;