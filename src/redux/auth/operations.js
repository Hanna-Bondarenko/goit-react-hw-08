import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader, clearAuthHeader } from "..//../authUtils";
import { authInstance } from "../../api";

/**
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await authInstance.post("/users/signup", credentials);

      // Після реєстрації додаємо токен у заголовок
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * POST @ /users/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await authInstance.post("/users/login", credentials);

      // Після логіну додаємо токен у заголовок
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/**
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await authInstance.post("/users/logout");

    // Очищаємо токен у заголовку після логауту
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/**
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Отримання токену з state
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // Додаємо токен у заголовок
      setAuthHeader(token);
      const response = await authInstance.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
