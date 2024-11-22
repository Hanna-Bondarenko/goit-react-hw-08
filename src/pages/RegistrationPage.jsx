import DocumentTitle from "../components/DocumentTitle";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Section from "../components/Section/Section";

const RegistrationPage = () => {
  return (
    <Section>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </Section>
  );
};

export default RegistrationPage;
