import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faCcPaypal,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
import styles from "../styles/About.module.css";
function About() {
  return (
    <div style={{ paddingBottom: "2px" }}>
      <div className={styles.about}>
        <div className={styles["about__img-container"]}>
          <img src="imgs/arya.png" alt="" className={styles["about__img"]} />
        </div>
        <div className={styles["about__text"]}>
          <div className={styles["about__title"]}>
            Do you need Clarity and Guidance?
          </div>
          <div className={styles["about__description"]}>
            Are you feeling broken hearted or going through a divorce would like
            to know if the person that you are whith is being faithful Has your
            partner changed or has become distant I have over 15 years of
            experience I am a 3rd generation gifted psychic
          </div>
          <div className={styles["about__telephone"]}>404-901-9536</div>
          <div className={styles["about__icons"]}>
            <FontAwesomeIcon
              icon={faDiscord}
              className={styles["about__social"]}
            />
            <FontAwesomeIcon
              icon={faCcPaypal}
              className={styles["about__social"]}
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className={styles["about__social"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
