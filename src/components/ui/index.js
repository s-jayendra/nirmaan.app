import { h } from "preact";

import style from "./style.css";

export const PrimaryButton = ({ linkText, className, ...props }) => {
  return (
    <a class={`${style.button} ${className && style[className]}`} {...props}>
      { linkText } { props.children }
    </a>
  )
}

export const GetInTouch = (props) => {
  return (
    <PrimaryButton {...props}>
      { !props.noArrow && <div class={style.rightArrow} /> }
    </PrimaryButton>
  )
};
