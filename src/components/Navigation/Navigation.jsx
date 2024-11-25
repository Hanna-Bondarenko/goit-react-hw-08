import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Перевіряємо стан авторизації

  return (
    <AppBar
      position="static"
      color="default"
      sx={{ boxShadow: "none", backgroundColor: "#f9f9f9" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            component={NavLink}
            to="/"
            sx={{
              textTransform: "none",
              color: "#333",
              "&.active": {
                fontWeight: "bold",
                color: "primary.main",
              },
            }}
          >
            Home
          </Button>
          {isLoggedIn && (
            <Button
              component={NavLink}
              to="/contacts"
              sx={{
                textTransform: "none",
                color: "#333",
                "&.active": {
                  fontWeight: "bold",
                  color: "primary.main",
                },
              }}
            >
              Contacts
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
