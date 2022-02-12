import { h } from "preact";

import style from "./style.css";

const LoginButton = ({ className, text, ...props}) => {
  return (
    <a class={className} {...props}>
      {text}
    </a>
  )
}

export default LoginButton;
