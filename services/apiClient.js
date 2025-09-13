import axios from "axios";

// Create an Axios instance with a base URL and default headers
const apiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? "https://nrramesh.vercel.app/api" 
    : "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable sending cookies or credentials if required by the backend
});

// Request interceptor (optional)
apiClient.interceptors.request.use(
  (config) => {
    console.log("Request Sent:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor to remove old response and save the new response in localStorage
apiClient.interceptors.response.use(
  (response) => {
    console.log("Response Received:", response.data);

    // Remove the previous response from localStorage before setting the new one
    localStorage.removeItem("apiResponse");

    // Save new response data to localStorage
    if (response.data) {
      localStorage.setItem("apiResponse", JSON.stringify(response.data));
    }

    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        "Response Error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("No Response Received:", error.request);
    } else {
      console.error("Error Message:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
