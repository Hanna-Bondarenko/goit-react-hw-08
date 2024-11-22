import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { RegisterSchema } from "../../util/shemas";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <Field id="password" name="password" type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit" className={styles.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
