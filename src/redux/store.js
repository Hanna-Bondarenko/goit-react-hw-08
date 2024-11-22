import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";

// Конфігурація для збереження токена
const authPersistConfig = {
  key: "userToken",
  storage,
  whitelist: ["token"],
};

// Створення стору
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer), // Ред'юсер для авторизації
    contacts: contactsReducer, // Ред'юсер для контактів
    filters: filtersReducer, // Ред'юсер для фільтрів
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Експорт персистору
export const persistor = persistStore(store);
