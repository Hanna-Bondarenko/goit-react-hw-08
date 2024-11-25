import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Button, Box, Typography } from "@mui/material";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap", // Дозволяємо адаптивність
        gap: "10px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "#f9f9f9",
        width: "100%", // Займає всю ширину
        maxWidth: "100%", // Підлаштовується під розмір батьківського контейнера
        [`@media (min-width: 600px)`]: {
          maxWidth: "80%", // На планшетах і більше – 80% ширини
        },
        [`@media (min-width: 960px)`]: {
          maxWidth: "60%", // На великих екранах – 60% ширини
        },
        margin: "0 auto", // Центрування в межах батьківського контейнера
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          color: "#333",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          flexGrow: 1, // Дозволяє тексту займати більше простору
          textAlign: "center",
        }}
      >
        Welcome, {user?.name || "Guest"}
      </Typography>
      <Button
        onClick={() => dispatch(logout())}
        variant="contained"
        sx={{
          backgroundColor: "rgb(158, 202, 248)",
          color: "white",
          textTransform: "none",
          padding: "5px 15px",
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "rgb(137, 180, 223)",
          },
        }}
      >
        LogOut
      </Button>
    </Box>
  );
};

export default UserMenu;
