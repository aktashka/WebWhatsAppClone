import React from "react";

import styles from "./chat.module.scss";

export const Chat = () => {
  return (
    <>
      <div className={styles.chat}>
        <div className={styles.chat_header}>
          <div className={styles.chat_header_inner}>
            <div className={styles.chat_header_img_block}>
              <img src="#" alt="" />
            </div>
            <div className={styles.chat_header_number}></div>
          </div>
        </div>
        <div className={styles.chat_content}>chat content</div>
        <div className={styles.chat_input}>chat input</div>
      </div>
    </>
  );
};
