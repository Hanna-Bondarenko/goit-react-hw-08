import axios from "axios";

// Створення інстансу Axios
export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
