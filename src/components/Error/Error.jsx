import styles from "./Error.module.css";

const Error = ({ children }) => {
  return (
    <p className={styles.text}>
      <b>{children}</b>
    </p>
  );
};

export default Error;
