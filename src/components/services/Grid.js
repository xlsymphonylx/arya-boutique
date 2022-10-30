import React, { useEffect } from "react";
import Item from "./Item";
import styles from "../../styles/services/Grid.module.css";
const services = require("../../assets/services.json");

function Grid() {
  return (
    <>
      <div className={styles.grid}>
        {services.map((service) => (
          <Item
            key={service.name}
            logo={service.photo}
            title={service.name}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
}

export default Grid;
