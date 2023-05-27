import React, { useState } from "react";
import axios from "axios";
import styles from "./chat.module.scss";

export const Chat = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://api.example.com/send-message",
        {
          recipient: "<recipient-phone-number>",
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer <your-access-token>",
          },
        }
      );

      if (response.status === 200) {
        console.log("Сообщение отправлено успешно");
        setMessage("");
      } 
    } catch (error) {
      console.error("Error sending the message:", error);
    }
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chat_header}>
        <div className={styles.chat_header_inner}>
          <div className={styles.chat_header_img_block}>
            <img src="#" alt="" />
          </div>
          <div className={styles.chat_header_number}></div>
        </div>
      </div>
      <div className={styles.chat_content}></div>
      <form className={styles.chat_input} onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleMessageChange} placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
