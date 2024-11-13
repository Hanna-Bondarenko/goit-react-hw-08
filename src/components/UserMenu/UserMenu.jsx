import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      <span className={styles.username}>Welcome, {user.name}</span>
      <button onClick={() => dispatch(logout())} className={styles.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
