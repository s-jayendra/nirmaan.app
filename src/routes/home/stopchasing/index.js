import { h } from "preact";
import { manpower } from "../data";

import style from "./style.css"
const StopChasing = () => {
  return (
    <div class={style.chaseWrapper}>
      <h3 class={style.chaseHeading}>Stop chasing your contractor for</h3>
      <div class={style.verticalLine} />
      <div class={style.chaseItems}>
        {
          manpower.map(item => (
            <div key={item.id}>
              <p class={style.chaseItem}>
                {item.description}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default StopChasing;
