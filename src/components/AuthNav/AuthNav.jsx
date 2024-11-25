import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";

export const AuthNav = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Button
        component={NavLink}
        to="/register"
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "rgb(158, 202, 248)", // Основний колір
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(137, 180, 223)", // Колір при наведенні
          },
          "&.active": {
            backgroundColor: "rgb(120, 160, 210)", // Колір для активного стану
          },
        }}
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "rgb(158, 202, 248)", // Основний колір
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(137, 180, 223)", // Колір при наведенні
          },
          "&.active": {
            backgroundColor: "rgb(120, 160, 210)", // Колір для активного стану
          },
        }}
      >
        Log In
      </Button>
    </Box>
  );
};
