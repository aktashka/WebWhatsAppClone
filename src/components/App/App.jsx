import React from "react";

import styles from "./App.module.scss";

import { Sidebar } from "../Sidebar";
import { Layout } from "../Layout/ui/Layout";
import { Chat } from "../Chat";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <Layout>
          <Chat />
        </Layout>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
