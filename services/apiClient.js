import axios from "axios";

// Create an Axios instance with a base URL and default headers
const apiClient = axios.create({
  baseURL: "https://nrramesh.vercel.app/api", // Base URL for your backend API
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add request/response interceptors for logging, error handling, etc.
apiClient.interceptors.request.use(
  (config) => {
    // Log the outgoing request
    console.log("Request Sent:", config);
    return config;
  },
  (error) => {
    // Handle request errors
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // Log the incoming response
    console.log("Response Received:", response.data);
    return response;
  },
  (error) => {
    // Handle response errors
    console.error("Response Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
