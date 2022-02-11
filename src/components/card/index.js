import { h } from "preact";

import style from "./style.css";

const Card = ({ children }) => {
  return (
    <article>
      {children}
    </article>
  )
}

export default Card;
