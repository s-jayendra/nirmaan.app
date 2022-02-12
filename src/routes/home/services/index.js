import { h } from "preact";

import style from "./style.css";

const Service = ({ data }) => {
  return (
    <div class={style.serviceWrapper}>
      <img width={220} src={data.imagePath} alt={data.title} />
      <h2 class={style.heading}>{data.title}</h2>
      <p>{data.description}</p>
      <div class={style.startsAt}>
        <p>{data.startsAt}</p>
      </div>
    </div>
  );
}

export default Service;