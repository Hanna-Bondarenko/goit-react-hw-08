import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectLoading, selectError } from "../redux/contacts/selectors";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
// import SortBar from "../components/SortBar/SortBar";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import DocumentTitle from "../components/DocumentTitle";
import Section from "../components/Section/Section";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* <SortBar /> */}
      {isLoading && <Loader>Request in progress...</Loader>}
      {error && <Error>{error}</Error>}
      <ContactList />
    </Section>
  );
};

export default ContactsPage;
