import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { Toaster } from "react-hot-toast";
import { Box, CircularProgress, Typography } from "@mui/material";

const pages = {
  HomePage: lazy(() => import("../pages/HomePage")),
  RegistrationPage: lazy(() => import("../pages/RegistrationPage")),
  LoginPage: lazy(() => import("../pages/LoginPage")),
  ContactsPage: lazy(() => import("../pages/ContactsPage")),
};

const routes = [
  { path: "/", element: <pages.HomePage /> },
  {
    path: "/register",
    element: (
      <RestrictedRoute redirectTo="/contacts">
        <pages.RegistrationPage />
      </RestrictedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <RestrictedRoute redirectTo="/contacts">
        <pages.LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: "/contacts",
    element: (
      <PrivateRoute redirectTo="/login">
        <pages.ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h6" component="div" color="textSecondary">
          Refreshing user...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>

      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "80px",
          right: "25px",
        }}
        toastOptions={{
          success: {
            style: {
              background: "#e6f5d0",
              color: "#333",
              fontWeight: "bold",
            },
          },
          error: {
            icon: "❌",
            style: {
              background: "#f0a7a1",
              color: "#333",
            },
          },
        }}
      />
    </Box>
  );
};
