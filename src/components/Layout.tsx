import React, { ReactNode } from "react";
import Header from "./Header";

import styles from "../styles/Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles["layout-container"]}>
      <Header />
      <main className={styles["layout-main"]}>{children}</main>
    </div>
  );
};

export default Layout;
