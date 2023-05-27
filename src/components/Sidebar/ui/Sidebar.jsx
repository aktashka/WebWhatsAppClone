import React from "react";
import styles from "./sidebar.module.scss";
import { SidebarChat } from "../../SidebarChat";
import { AiOutlineSearch, CgSortAz } from "react-icons/all";
export const Sidebar = () => {
  const data = [
    {
      id: 1,
      name: "Актан",
    },
    {
      id: 2,
      name: "Дастан",
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_search}>
        <span className={styles.sidebar_search_icon}>
          <AiOutlineSearch size={20} color="#8696A0" />
        </span>
        <input
          type="text"
          className={styles.sidebar_search_input}
          placeholder="Поиск или новый чат"
        />
        <CgSortAz size={30} color="#8696A0" />
      </div>
      {data.map((item) => {
        <SidebarChat name={item.name} />;
      })}
    </div>
  );
};
