import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div className={styles.container}>
      <header>
        <AppBar />
      </header>
      <main className={styles.mainContent}>
        <Suspense fallback={<div className={styles.loader}></div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
