import { ListItem, Typography, Button } from "@mui/material"; // Додано компоненти MUI
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <ListItem
      className={styles.item}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ color: "gray" }}>
        {number}
      </Typography>
      <Button
        variant="contained"
        onClick={onDelete}
        sx={{
          marginLeft: "10px",
          backgroundColor: "gray", // Змінюємо колір кнопки на сірий
          color: "white", // Колір тексту
          "&:hover": {
            backgroundColor: "darkgray", // Колір кнопки при hover
          },
        }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default Contact;
