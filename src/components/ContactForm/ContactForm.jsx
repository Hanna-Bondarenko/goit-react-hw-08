import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";
import { AddProfileSchema } from "../../util/shemas";
import toast, { Toaster } from "react-hot-toast";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully!");
      })
      .catch(() => {
        toast.error("Failed to add contact.");
      });
    resetForm();
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{ name: "", phone: "" }}
        validationSchema={AddProfileSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.row}>
            <label htmlFor="name" className={styles.text}>
              Name:
            </label>
            <Field id="name" name="name" type="text" className={styles.input} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="phone" className={styles.text}>
              Phone:
            </label>
            <Field
              id="phone"
              name="phone"
              type="tel"
              className={styles.input}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.btnBox}>
            <button type="submit" className={styles.btn}>
              Add Contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
