import * as Yup from "yup";

// Поля для логіну
export const loginFields = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
];

// Схема валідації для логіну
export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// Поля для реєстрації
export const registerFields = [
  { name: "name", type: "text", label: "Name" },
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];

// Схема валідації для реєстрації
export const registerSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// Схема для профілю
export const addProfileSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      "Invalid phone number. Phone must be +380XXXXXXXXX"
    ),
  email: Yup.string().email("Invalid email").required("Email is required"),
  status: Yup.string()
    .required("Status is required to choose")
    .oneOf(
      ["online", "offline"],
      "Status must be either 'online' or 'offline'"
    ),
  hasPhysicalAddress: Yup.boolean(),
});

// Схема для пошуку продуктів
export const searchProductsSchema = Yup.object({
  searchTerm: Yup.string()
    .required("Search term is required")
    .min(2, "Search term must be at least 2 characters"),
});
