import { h } from "preact";

import style from "./style.css";

const Burger = () => (
  <div class={style.burger}>
    <div class={style.line} />
    <div class={style.line} />
    <div class={style.line} />
  </div>
)

const Close = () => (
  <div class={style.close}>
    <div class={`${style.line} ${style.left}`} />
    <div class={`${style.line} ${style.right}`} />
  </div>
)

const Hamburger = ({ isMenuOpen, onClick, className }) => {
  return (
    <div onClick={onClick} class={style.hamburger}>
      { isMenuOpen ? <Close /> : <Burger /> }
    </div>
  );
}

export default Hamburger;
