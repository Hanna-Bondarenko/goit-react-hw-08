import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Button } from "@mui/material"; // Додано компонент Material-UI
import styles from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      <p className={styles.username}>Welcome, {user?.name || "Guest"}</p>
      <Button
        onClick={() => dispatch(logout())}
        style={{ backgroundColor: "rgb(158, 202, 248)", color: "white" }}
        variant="contained" // Додаємо стиль кнопки "contained"
      >
        LogOut
      </Button>
    </div>
  );
};

export default UserMenu;
