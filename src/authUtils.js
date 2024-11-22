import { authInstance } from "./api";

// Utility для встановлення JWT
export const setAuthHeader = (token) => {
  if (token) {
    authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

// Utility для очищення JWT
export const clearAuthHeader = () => {
  delete authInstance.defaults.headers.common.Authorization;
};
