import { h } from "preact";

import Form from "./form";
import style from "./style.css";

const Email = (props) => {
  return (
    <>
      <div class={style.overlay} onClick={() => props.toggleEmailForm()}></div>
      <div class={style.emailWrapper}>
        <Form {...props} />
      </div>

    </>
  )
}

export default Email;
