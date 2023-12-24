// axios-config.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Create an Axios instance with common configuration
const axiosInstance1: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Your common API host
  headers: {
    'Content-Type': 'application/json',
    // Other common headers...
  },
});

// Request interceptor
axiosInstance1.interceptors.request.use((config) => {
    // Add any additional request configuration here
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance1.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default axiosInstance1;
