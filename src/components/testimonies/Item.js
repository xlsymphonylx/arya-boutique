import { faHatWizard, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/testimonies/Item.module.css";

function Item() {
  return (
    <div className={styles.testimony}>
      <FontAwesomeIcon
        icon={faHatWizard}
        className={styles["testimony__icon"]}
      />
      <div className={styles["testimony__title"]}>kb23_3</div>
      <div className={styles["testimony__description"]}>
        When I tell you Arya is like that, she’s like that when it comes to her
        work!!!!! Everything she did for me, happens!!!
      </div>
    </div>
  );
}

export default Item;
