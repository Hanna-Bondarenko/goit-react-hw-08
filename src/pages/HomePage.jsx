import DocumentTitle from "../components/DocumentTitle";
import Section from "../components/Section/Section";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Section>
      <DocumentTitle>Home</DocumentTitle>
      <Box
        sx={{
          minHeight: "calc(100vh - 50px)", // Висота сторінки з урахуванням AppBar
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column", // Ставимо текст у колонку
          padding: "20px", // Додаємо відступи
          backgroundColor: "#f5f5f5", // Фонова заливка
          borderRadius: "10px", // Закруглені краї
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Тінь
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 500,
            fontSize: {
              xs: "32px", // Розмір для маленьких екранів
              sm: "40px", // Для середніх екранів
              md: "48px", // Для великих екранів
            },
            textAlign: "center",
            marginBottom: "20px", // Відступ знизу
          }}
        >
          Welcome to the Contacts App
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "14px", // Розмір тексту для маленьких екранів
              sm: "16px", // Для середніх екранів
              md: "18px", // Для великих екранів
            },
            textAlign: "center",
            color: "#666",
          }}
        >
          Manage your contacts easily.
        </Typography>
      </Box>
    </Section>
  );
};

export default HomePage;
