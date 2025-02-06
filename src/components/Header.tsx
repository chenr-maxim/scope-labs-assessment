import Link from "next/link";
import { FiPlus } from "react-icons/fi";

import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <nav>
        <Link href="/create-video">
          <button className={styles["create-video-button"]}>
            <FiPlus className={styles.icon} /> Create New Video
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
