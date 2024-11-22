import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader, clearAuthHeader } from "../../authUtils";
import { authInstance } from "../../api";

// Загальний обробник помилок
const handleApiError = (error, thunkAPI) => {
  console.error("API Error:", error.message);
  return thunkAPI.rejectWithValue(error.message);
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      console.log("Registering user:", credentials);
      const response = await authInstance.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      console.log("Registration success:", response.data);
      return response.data;
    } catch (error) {
      return handleApiError(error, thunkAPI);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      console.log("Logging in user:", credentials);
      const response = await authInstance.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      console.log("Login success:", response.data);
      return response.data;
    } catch (error) {
      return handleApiError(error, thunkAPI);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    console.log("Logging out user");
    await authInstance.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return handleApiError(error, thunkAPI);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      console.warn("No token found");
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(token);
      console.log("Refreshing user...");
      const response = await authInstance.get("/users/current");
      console.log("Refresh success:", response.data);
      return response.data;
    } catch (error) {
      return handleApiError(error, thunkAPI);
    }
  }
);
