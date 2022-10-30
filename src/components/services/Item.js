import React from "react";
import styles from "../../styles/services/Item.module.css";

function Item({ logo, title, description, price }) {
  const checkLength = (string) => {
    if (string.length > 256) {
      let shorterString = string.substring(0, 130);
      shorterString = shorterString + "...";
      return shorterString;
    }
    return string;
  };
  return (
    <div className={styles["service-container"]} title={description}>
      <div className={styles["service__img-container"]}>
        <img src={logo} alt="texto" className={styles["service__img"]} />
      </div>
      <div className={styles["service__text"]}>
        <p className={styles["service__title"]}>{title}</p>
        <p className={styles["service__description"]}>
          {checkLength(description)}
        </p>
        <p className={styles["service__price"]}>{price}</p>
      </div>
    </div>
  );
}

export default Item;
