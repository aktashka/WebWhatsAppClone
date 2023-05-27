import React from "react";
import styles from "./sidebar.module.scss";
import { SidebarChat } from "../../SidebarChat";
import { Scrollbars } from "react-custom-scrollbars-2";
import { AiOutlineSearch, CgSortAz } from "react-icons/all";
export const Sidebar = () => {
  const data = [
    {
      name: "Актан",
    },
    {
      name: "Дастан",
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_search}>
        <span className={styles.sidebar_search_icon}>
          <AiOutlineSearch size={20} color="#8696A0" />
        </span>
        <input type="text" className={styles.sidebar_search_input} placeholder="Поиск или новый чат" />
        <CgSortAz size={30} color="#8696A0" />
      </div>
      <Scrollbars style={{ width: "100%", height: "90%" }}>
        <div className={styles.sidebar_chat}>
          <SidebarChat />
        </div>
      </Scrollbars>
    </div>
  );
};