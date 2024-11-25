import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { handlePending, handleRejected } from "../../util/statusHelper";
import toast from "react-hot-toast";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      // Add Contact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.push(payload);
        toast.success("Contact successfully added!");
      })
      .addCase(addContact.rejected, handleRejected)
      // Delete Contact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== payload);
        toast.error("Contact successfully deleted!");
      })
      .addCase(deleteContact.rejected, handleRejected)
      // Edit Contact
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((contact) =>
          payload.id === contact.id ? payload : contact
        );
        toast.success("Contact successfully edited!");
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
