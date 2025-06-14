import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  // baseURL: import.meta.env.VITE_MODE === "development" ? "http://localhost:5001/api" : "/api",
  withCredentials: true,
});

console.log(import.meta.env.VITE_MODE, axiosInstance.defaults.baseURL);
