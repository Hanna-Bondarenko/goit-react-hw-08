import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { loginSchema } from "../../util/schemas";
import { Box, TextField, Button, Typography } from "@mui/material";

const LoginForm = () => {
  const dispatch = useDispatch();

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

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({ handleChange, handleBlur, values, touched, errors }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "400px",
              margin: "0 auto",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Log In
            </Typography>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: "10px",
                fontSize: "16px",
                backgroundColor: "rgb(158, 202, 248)",
                "&:hover": {
                  backgroundColor: "rgb(137, 180, 223)",
                },
                "&:active": {
                  backgroundColor: "gray", // Сірий колір при активному стані
                },
              }}
            >
              Log In
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
