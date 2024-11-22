import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { Toaster } from "react-hot-toast";

const pages = {
  HomePage: lazy(() => import("../pages/HomePage")),
  RegisterPage: lazy(() => import("../pages/RegistrationPage")),
  LoginPage: lazy(() => import("../pages/LoginPage")),
  ContactsPage: lazy(() => import("../pages/ContactsPage")),
};

const routes = [
  { path: "/", element: <pages.HomePage /> },
  {
    path: "/register",
    element: (
      <RestrictedRoute redirectTo="/contacts">
        <pages.RegisterPage />
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

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <b className="refreshing">Refreshing user...</b>;
  }

  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: 67, right: 25 }}
        toastOptions={{
          success: { style: { background: "#e6f5d0" } },
          error: { icon: "❌", style: { background: "#f0a7a1" } },
        }}
      />
    </>
  );
};

export default App;
