import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AppBar as MuiAppBar, Toolbar, Container, Box } from "@mui/material";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar
      position="static"
      color="default"
      sx={{
        boxShadow: "none",
        backgroundColor: "#f9f9f9",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="lg" sx={{ padding: { xs: "0 10px", md: "0 20px" } }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: { xs: "wrap", sm: "nowrap" }, // Адаптивне вирівнювання
            gap: { xs: "10px", sm: "0px" },
          }}
        >
          {/* Навігація */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Navigation />
          </Box>

          {/* UserMenu або AuthNav залежно від стану авторизації */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              width: { xs: "100%", sm: "auto" }, // Адаптивна ширина
            }}
          >
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
