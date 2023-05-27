import React from "react";
import { HeaderLayout } from "../../HeaderLayout";
export const Layout = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      {children}
    </>
  );
};
