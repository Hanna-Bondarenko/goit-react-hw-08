import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    sort: "default",
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.name = payload; // Оновлюємо значення фільтра
    },
    changeSortType(state, { payload }) {
      state.sort = payload; // Оновлюємо тип сортування
    },
  },
});

// Експорт дій
export const { changeFilter, changeSortType } = filtersSlice.actions;

// Експорт ред'юсера
export const filtersReducer = filtersSlice.reducer;
// Селектор для типу сортування
