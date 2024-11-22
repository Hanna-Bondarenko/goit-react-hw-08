import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectSortType } from "../../redux/filters/selectors";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const sortType = useSelector(selectSortType);
  const loading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();

  const sortedContacts = [...contacts].sort((a, b) => {
    if (sortType === "alphabetical") return a.name.localeCompare(b.name);
    if (sortType === "reverse") return b.name.localeCompare(a.name);
    return 0; // Default
  });

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {loading && <p className={styles.loading}>Loading contacts...</p>}
      {!loading && contacts.length === 0 && (
        <p className={styles.noContacts}>No contacts found.</p>
      )}
      <ul className={styles.list}>
        {sortedContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            onDelete={() => handleDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
