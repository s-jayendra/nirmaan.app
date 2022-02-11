import { h } from "preact";

import style from "./style.css";

const Construction = ({ data, index }) => {
  return (
    <div class={style.constWrapper}>
      <p class={style.constIndex}>{index}</p>
      <p class={style.constDesc}>{data.description}</p>
    </div>
  );
}

export default Construction;
