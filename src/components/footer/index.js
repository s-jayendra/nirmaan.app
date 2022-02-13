import { h } from "preact";

import style from "./style.css";

const Footer = () => {
  return (
    <footer>
      <div class={style.address}>
        Stratos Infra Technologies Pvt Ltd
        Obeya Verve, L376 / A, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru - 560068
        <div class={style.contact}>
          info@nirmaan.app | +91-9835377587
        </div>
      </div>
      <div class={style.developed}>
        <p>Developed By</p>
        <p>Jayendra Sharan | https://jayendra.xyz</p>
      </div>
    </footer>
  );
}

export default Footer;
