import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { loginSchema } from "../../util/schemas"; // Схема валідації
import styles from "./LoginForm.module.css"; // Підключення стилів

const LoginForm = () => {
  const dispatch = useDispatch();

  // Обробник форми
  const handleSubmit = (formValues, { resetForm }) => {
    dispatch(login(formValues))
      .unwrap()
      .then(() => {
        console.log("Login success");
      })
      .catch(() => {
        console.log("Login error");
      });

    resetForm();
  };

  console.log("Rendering LoginForm");

  return (
    <Formik
      initialValues={{ email: "", password: "" }} // Початкові значення
      onSubmit={handleSubmit} // Обробник форми
      validationSchema={loginSchema} // Схема валідації
    >
      <Form className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <Field
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className={styles.input}
        />
        <ErrorMessage name="email" component="div" className={styles.error} />

        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <Field
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          className={styles.input}
        />
        <ErrorMessage
          name="password"
          component="div"
          className={styles.error}
        />

        <button type="submit" className={styles.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
