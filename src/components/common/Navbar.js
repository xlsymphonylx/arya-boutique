import React from "react";
import styles from "../../styles/common/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles["nav-container"]}>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <img
            src="imgs/brand.png"
            alt="brand logo"
            id={styles["brand-logo"]}
          />
        </div>
        <ul className={styles["nav__list"]}>
          <li className={styles["nav__item"]}>Services</li>
          <li className={styles["nav__item"]}>Contact</li>
          <li className={styles["nav__item"]}>Testimonies</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
