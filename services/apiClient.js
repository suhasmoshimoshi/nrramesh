import axios from "axios";

// Create an Axios instance with a base URL and default headers
const apiClient = axios.create({
  baseURL: "https://nrramesh.vercel.app/api", // Base URL for your backend API
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers if needed
  },
  withCredentials: true, // Enable sending cookies or credentials if required by the backend
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
    if (error.response) {
      // The server responded with a status code outside the 2xx range
      console.error(
        "Response Error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No Response Received:", error.request);
    } else {
      // Something else happened while setting up the request
      console.error("Error Message:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
