import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import { Box, Container, CircularProgress } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Забезпечує висоту на всю сторінку
        backgroundColor: "#f5f5f5", // Фонова заливка сторінки
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Шапка */}
      <header>
        <AppBar />
      </header>

      {/* Основний контент */}
      <main>
        <Container
          maxWidth="md" // Вирівнюємо контент
          sx={{
            flexGrow: 1, // Займає залишковий простір
            padding: "20px",
            marginTop: "20px",
            backgroundColor: "#fff", // Білий фон для основного контейнера
            borderRadius: "10px", // Закруглені кути
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Тінь
          }}
        >
          <Suspense
            fallback={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "300px",
                }}
              >
                <CircularProgress />{" "}
                {/* Компонент для відображення завантаження */}
              </Box>
            }
          >
            <Outlet /> {/* Компонент для відображення дочірніх маршрутів */}
          </Suspense>
        </Container>
      </main>
    </Box>
  );
};

export default Layout;
