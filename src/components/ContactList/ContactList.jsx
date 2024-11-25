import { useDispatch, useSelector } from "react-redux";
import { List, Typography } from "@mui/material"; // Додано компоненти Material UI
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectSortType } from "../../redux/filters/selectors";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const sortType = useSelector(selectSortType);
  const loading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();

  // Сортування контактів
  const sortedContacts = [...contacts].sort((a, b) => {
    if (sortType === "alphabetical") return a.name.localeCompare(b.name);
    if (sortType === "reverse") return b.name.localeCompare(a.name);
    return 0; // Default
  });

  // Видалення контакту
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {loading && (
        <Typography variant="body1" color="textSecondary">
          Loading contacts...
        </Typography>
      )}
      {!loading && contacts.length === 0 && (
        <Typography variant="body1" color="textSecondary">
          No contacts found.
        </Typography>
      )}
      <List sx={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
        {sortedContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            onDelete={() => handleDelete(id)}
          />
        ))}
      </List>
    </div>
  );
};

export default ContactList;
