import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dynamicpencil-us.backendless.app",
});
