import React from "react";

import styles from "./App.module.scss";

import { Sidebar } from "../Sidebar";
import { Layout } from "../Layout/ui/Layout";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <Layout>
          <Sidebar />
        </Layout>
      </div>
    </div>
  );
}

export default App;
