import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/common/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles["nav-container"]}>
      <nav className={styles.nav}>
        <Link to="/">
          <div className={styles.brand}>
            <img
              src="imgs/brand.png"
              alt="brand logo"
              id={styles["brand-logo"]}
            />
          </div>
        </Link>
        <ul className={styles["nav__list"]}>
          <li className={styles["nav__item"]}>
            <Link to="/services">Services</Link>
          </li>
          <li className={styles["nav__item"]}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles["nav__item"]}>
            <Link to="/testimonies">Testimonies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
