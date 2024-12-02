import axios from 'axios';

const SERVER_BASEURL = 'http://localhost:3001/api/v1';

const axiosInstance = axios.create({
    baseURL: SERVER_BASEURL,
    timeout: 1000,
});

export default axiosInstance;
