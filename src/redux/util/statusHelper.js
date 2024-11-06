// Функція, яка обробляє стан завантаження
export const handlePending = (state) => {
  state.loading = true; // Встановлюємо прапорець loading у true, що означає початок завантаження
  state.error = null; // Очищуємо поле помилки
};

// Функція, яка обробляє помилки
export const handleRejected = (state, action) => {
  state.loading = false; // Завершуємо завантаження
  state.error = action.payload; // Записуємо повідомлення про помилку з payload
};
