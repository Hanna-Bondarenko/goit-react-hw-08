import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <nav>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Log In
      </NavLink>
    </nav>
  );
};
