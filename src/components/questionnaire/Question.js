import React from "react";
import styles from "../../styles/Question.module.css";
function Question({ setAnswer, answer }) {
  return (
    <div
      className={`${styles["question-container"]} ${
        answer ? "hidden" : "visible"
      }`}
    >
      <div className={styles["question__img-container"]}>
        <img
          src="imgs/services/chakras.jpg"
          alt="texto"
          className={styles["question__img"]}
        />
      </div>
      <div className={styles["question__text"]}>
        <p className={styles["question__title"]}>
          Is your life empty without him?
        </p>
        <div className={styles["question__options"]}>
          <button className="btn btn-success" onClick={() => setAnswer(true)}>
            YES
          </button>
          <button className="btn btn-danger" onClick={() => setAnswer(false)}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
