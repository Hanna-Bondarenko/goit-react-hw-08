import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import { fetchContacts } from "../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <div>
      <h2>Your Contacts</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
}
