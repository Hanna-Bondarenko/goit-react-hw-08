import clsx from "clsx";
import styles from "../components/Navigation/Navigation.module.css";

export const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};
