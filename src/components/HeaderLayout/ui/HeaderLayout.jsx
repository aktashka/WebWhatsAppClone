import React from "react";

import styles from "./headerLayout.module.scss";
import {
  IoIosPeople,
  IoPersonCircleOutline,
  TbCircleDashed,
  BsChatLeftTextFill,
  IoEllipsisVertical,
  AiOutlineSearch,
} from "react-icons/all";

export const HeaderLayout = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_inner}>
          <div className={styles.header_leftSide}>
            <IoPersonCircleOutline size={40} color="#AEBAC1" />
            <div className={styles.header_chat_icons}>
              <div className={styles.header_chat_icon}>
                <IoIosPeople size={30} color="#AEBAC1" />
              </div>
              <div className={styles.header_chat_icon}>
                <TbCircleDashed size={25} color="#AEBAC1" />
              </div>
              <div className={styles.header_chat_icon}>
                <BsChatLeftTextFill size={20} color="#AEBAC1" />
              </div>
              <div className={styles.header_chat_icon}>
                <IoEllipsisVertical size={23} color="#AEBAC1" />
              </div>
            </div>
          </div>
          <div className={styles.header_rightSide}>
            <div className={styles.header_rightSide_inner}>
              <div className={styles.header_rightSide_info_block}>
                <div className={styles.header_rightSide_img}>
                  <IoPersonCircleOutline size={40} color="#AEBAC1" />
                </div>
                <div className={styles.header_rightSide_title}>Заголовок</div>
              </div>
              <div className={styles.header_rightSide_icons_block}>
                <div className={styles.header_chat_icon}>
                  <AiOutlineSearch size={20} color="#AEBAC1" />
                </div>
                <div className={styles.header_chat_icon}>
                  <IoEllipsisVertical size={23} color="#AEBAC1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
