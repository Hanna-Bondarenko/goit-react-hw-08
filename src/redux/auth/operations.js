import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../api";
import { setToken, clearToken } from "../../authUtils";

// Реєстрація
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await authInstance.post("/users/signup", credentials);
      setToken(response.data.token); // Встановлюємо токен
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Логін
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await authInstance.post("/users/login", credentials);
      setToken(response.data.token); // Встановлюємо токен
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Логаут
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await authInstance.post("/users/logout");
    clearToken(); // Очищаємо токен
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Оновлення користувача
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }

    setToken(token); // Встановлюємо токен в заголовок

    try {
      const response = await authInstance.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
