import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../api"; // Використання налаштованого Axios-інстансу

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",

  async (_, thunkAPI) => {
    try {
      const response = await authInstance.get("/contacts");

      return response.data; // Повертаємо отримані дані
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    console.log("Data being sent to API:", contact);
    try {
      const response = await authInstance.post("/contacts", contact);
      console.log("Response from API:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error response from API:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await authInstance.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return response.data; // Повертаємо оновлений контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await authInstance.delete(`/contacts/${contactId}`);
      return contactId; // Повертаємо ID видаленого контакту
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
