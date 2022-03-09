import { h } from "preact";

import style from "./style.css";

const Footer = () => {
  return (
    <footer>
      <div class={style.address}>
        <div class={style.contact}>
          info@nirmaan.app | +91-9835377587
        </div>
      </div>
      <div class={style.developed}>
        <p>Developed By: <a href="mailto:me@jayendra.xyz" target="_blank">Jayendra Sharan</a></p>
      </div>
    </footer>
  );
}

export default Footer;
