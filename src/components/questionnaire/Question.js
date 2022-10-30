import React, { useEffect, useState } from "react";
import styles from "../../styles/Question.module.css";
import {useNavigate} from 'react-router-dom'
function Question() {

  const questions = require('../../assets/questions.json')
  const [currentQuestion, setCurrentQuestion] = useState(questions[1]);
  const [answers, setAnswers] = useState(0);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const setAnswer = (answer)=>{
    if(index === 9) setIndex(0)
    else setIndex(index + 1)
    setCurrentQuestion(questions[index]);
    if (answer) setAnswers(answers + 1);
  }

  useEffect(() => {
    console.log(answers)
    if(answers > 3){
      navigate('/services')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers])
  
  return (
    <div
      className={styles["question-container"]}
    >
      
      <div className={styles["question__text"]}>
        <p className={styles["question__title"]}>
          {currentQuestion.question}
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
