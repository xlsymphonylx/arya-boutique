import {
  faHatWizard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/testimonies/Item.module.css";

function Item({ name, testimony }) {
  return (
    <div className={styles.testimony}>
      <FontAwesomeIcon
        icon={faHatWizard}
        className={styles["testimony__icon"]}
      />
      <div className={styles["testimony__title"]}>{name}</div>
      <div className={styles["testimony__description"]}>{testimony}</div>
    </div>
  );
}

export default Item;
