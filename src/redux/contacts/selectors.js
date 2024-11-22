import { createSelector } from "@reduxjs/toolkit";

// Селектори для стану контактів
export const selectContactsList = (state) => state.contacts?.items || [];
export const selectLoading = (state) => state.contacts?.loading || false;
export const selectError = (state) => state.contacts?.error || null;

// Селектор для фільтра
export const selectNameFilter = (state) => state.filters?.name || "";

// Селектор для відфільтрованих контактів
export const selectFilteredContacts = createSelector(
  [selectContactsList, selectNameFilter],
  (contacts, filter) => {
    if (!filter.trim()) return contacts; // Якщо фільтр порожній, повертаємо всі контакти
    return contacts.filter(
      (contact) =>
        (contact.name &&
          contact.name.toLowerCase().includes(filter.toLowerCase())) ||
        (contact.number &&
          contact.number.toLowerCase().includes(filter.toLowerCase()))
    );
  }
);
