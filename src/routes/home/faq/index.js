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
      <hr />
      <h1 class={style.logoHeading}>trusted by customers across the nation</h1>
      <div class={style.customerLogos}>
        {
          customers.map(item => (
            <img class={style.logo} alt={item.alt} src={`../../../assets/customers/${item.image}`} />
          ))
        }
      </div>
    </div>
  )
}

export default FAQ;
