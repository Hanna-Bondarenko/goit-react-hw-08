import DocumentTitle from "../components/DocumentTitle";
import Section from "../components/Section/Section";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
  },
  title: {
    padding: "55px 55px",
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

const HomePage = () => {
  return (
    <Section>
      <DocumentTitle>Home</DocumentTitle>
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to the Contacts App</h1>
        <p>Manage your contacts easily.</p>
      </div>
    </Section>
  );
};

export default HomePage;
