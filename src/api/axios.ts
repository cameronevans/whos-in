import axios from "axios";
export const axiosInstance = axios.create({
  headers: {
    "interactive-session": "true",
  },
});
