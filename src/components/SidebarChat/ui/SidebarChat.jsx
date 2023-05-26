import React, { useState } from "react";
import styles from "./sidebarChat.module.scss";

export const SidebarChat = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <div className={styles.sidebarChat} onClick={handleClick}>
        <div className={styles.sidebarChat_inner}>
          <div className={styles.sidebarChat_leftSide}>
            <div className={styles.sidebarChat_img}>
              <img src="#" alt="" />
            </div>
            <div className={styles.sidebarChat_text_block}>
              <h3 className={styles.sidebarChat_title}></h3>
              <p className={styles.sidebarChat_lastMessage}>
                Последнее сообщение
              </p>
            </div>
          </div>

          <div className={styles.sidebarChat_date}>13:40</div>
        </div>
      </div>
    </>
  );
};
