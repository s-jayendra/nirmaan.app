import { h } from "preact";

import style from "./style.css";

const Responsibilities = ({data}) => {
  return (
    <div class={style.respWrapper}>
      <p class={style.respTitle}>
        { data.title }
      </p>
      <p class={style.respDesc}>
        { data.description }
      </p>
    </div>
  )

}

export default Responsibilities;