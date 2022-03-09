import { h } from "preact";
import { useState } from "preact/hooks";

import { customers, faq } from "../data";

import style from "./style.css";

const FAQ = () => {
  const [openQuesId, setOpenQues] = useState('');

  const toggleAnswerState = (quesId) => {
    if (openQuesId === quesId){
      setOpenQues('');
      return;
    }
    setOpenQues(quesId);
  }

  return (
    <div class={style.faqWrapper}>
      {
        faq.map(item => (
          <div key={item.id} class={`${style.qna} ${style.open}`}>
            <p
              onClick={() => toggleAnswerState(item.id)}
              class={`${style.ques} ${item.id === openQuesId ? style.open : style.close}`}
            >
              {item.question}
            </p>
            <p
              class={`${style.answer} ${item.id === openQuesId ? style.open : style.close}`}
            >
              {item.answer}
            </p>
          </div>
        ))
      }
    </div>
  )
}
export default FAQ;
