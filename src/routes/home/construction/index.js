import { h } from "preact";

import style from "./style.css";

const Construction = ({ data, index, len }) => {
  return (
    <div class={style.constWrapper}>
      <div class={style.description}>
        <p class={style.constIndex}>{`${index}. `}</p>
        <p class={style.constDesc}>{data.description}</p>
      </div>
      {
        index !== len && <div class={style.bottomArrow} />
      }
    </div>
  );
}

export default Construction;
