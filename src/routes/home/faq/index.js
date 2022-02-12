import { h } from "preact";

import { customers, faq } from "../data";

import style from "./style.css";

const FAQ = () => {
  return (
    <div class={style.faqWrapper}>
      {
        faq.map(item => (
          <div key={item.id} class={style.qna}>
            <p class={style.ques}>{item.question}</p>
            <p class={style.answer}>{item.answer}</p>
          </div>
        ))
      }
      <hr />
      <h1 class={style.logoHeading}>trusted by customers across the nation</h1>
      <div class={style.customerLogos}>
        {
          customers.map(item => (
            <img class={style.logo} alt={item.alt} src={`../../../assets/customers/${item.image}.png`} />
          ))
        }
      </div>
    </div>
  )
}

export default FAQ;
