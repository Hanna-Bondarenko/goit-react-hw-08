import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
