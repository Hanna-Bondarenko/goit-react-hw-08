import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";
import { addProfileSchema } from "../../util/schemas";
import toast, { Toaster } from "react-hot-toast";
import { Button, TextField } from "@mui/material"; // Додано компоненти MUI
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const formattedValues = { ...values, number: values.phone };
    delete formattedValues.phone; // Якщо API очікує `number`
    dispatch(addContact(formattedValues))
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
        validationSchema={addProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => (
          <Form className={styles.form}>
            <div className={styles.row}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                value={values.name}
                onChange={handleChange} // Прив'язуємо значення до Formik
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.row}>
              <TextField
                label="Phone"
                name="phone"
                variant="outlined"
                fullWidth
                value={values.phone}
                onChange={handleChange} // Прив'язуємо значення до Formik
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.btnBox}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add Contact
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
