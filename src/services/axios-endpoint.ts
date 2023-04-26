import axios,  { type AxiosInstance } from "axios";


const sesameApiService : AxiosInstance = axios.create({
    baseURL: "https://api-test.sesametime.com/schedule/v1/work-entries",
});

sesameApiService.interceptors.request.use((config) => {
    const token = "16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});


export default sesameApiService;