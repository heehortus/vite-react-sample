import { Link, useLocation } from "react-router-dom";
import styles from "../css/MenuBar.module.css";
import "../css/font.css";

function MenuBar() {
  const location = useLocation();

  return (
    <nav className={styles.mainNav}>
      <div className={styles.navWrapper}>
        <div className={styles.logo}>
          <Link to="/vite-react-sample/" className={styles.navHome}>
            HORTUS
          </Link>
        </div>
        <div className={styles.menu}>
          <Link
            to="/vite-react-sample/pages/about"
            className={`${styles.navLink} ${
              location.pathname === "/vite-react-sample/pages/about"
                ? styles.active
                : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/vite-react-sample/pages/project"
            className={`${styles.navLink} ${
              location.pathname === "/vite-react-sample/pages/project"
                ? styles.active
                : ""
            }`}
          >
            Project
          </Link>
          <Link
            to="/vite-react-sample/pages/contact"
            className={`${styles.navLink} ${
              location.pathname === "/vite-react-sample/pages/contact"
                ? styles.active
                : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
