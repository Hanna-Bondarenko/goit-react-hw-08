import DocumentTitle from "../components/DocumentTitle";
import LoginForm from "../components/LoginForm/LoginForm";
import Section from "../components/Section/Section";

const LoginPage = () => {
  return (
    <Section>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </Section>
  );
};

export default LoginPage;
