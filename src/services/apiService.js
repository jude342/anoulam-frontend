// Library for sending requests
import axios from "axios";

// URL's for the API endpoints
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const API_TOKEN_KEY = process.env.EXPO_PUBLIC_SECRET_TOKEN;

const apiService = axios.create({
  baseURL: BASE_URL,
  timeout: 7000,
});

apiService.interceptors.request.use(
  (config) => {
    config.headers['X-AnoUlam-Token'] = API_TOKEN_KEY;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;