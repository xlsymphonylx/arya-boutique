import React from "react";
import Item from "./Item";
import styles from "../../styles/testimonies/Grid.module.css";
const testimonies = require("../../assets/testimonies.json");

function Grid() {
  return (
    <div className={styles.grid}>
      {testimonies.map((testimony) => (
        <Item
          key={testimony.name}
          testimony={testimony.testimony}
          name={testimony.name}
        />
      ))}
    </div>
  );
}

export default Grid;
