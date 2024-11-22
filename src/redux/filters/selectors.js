import { createSelector } from "@reduxjs/toolkit";
import { selectContactsList } from "../contacts/selectors";

export const selectFilterName = (state) => state.filters?.name || "";
export const selectSortType = (state) => state.filters?.sort || "default";

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilterName, selectSortType],
  (contacts = [], filter = "", sort = "default") => {
    // Перевірка фільтра
    const normalizedFilter = filter.toLowerCase().trim();
    const filteredContacts = normalizedFilter
      ? contacts.filter(({ name = "", number = "" }) =>
          `${name} ${number}`.toLowerCase().includes(normalizedFilter)
        )
      : contacts;

    // Сортування
    switch (sort) {
      case "alphabetical":
        return [...filteredContacts].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      case "reverse":
        return [...filteredContacts].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      default:
        return filteredContacts;
    }
  }
);
