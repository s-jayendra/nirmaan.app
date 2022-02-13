import { h } from "preact";

import { useState } from "preact/hooks";

import Hamburger from "../hamburger";
import { GetInTouch } from "../ui";

import style from "./style.css";

const SHOW = "show";
const HIDE = "hide";

const Navigation = (props) => {
  const [toggleMenu, setToggleMenu] = useState(HIDE);

  const onMenuClick = () => {
    setToggleMenu(toggleMenu === SHOW ? HIDE : SHOW);
  }

  return (
    <>
      <Hamburger
				isMenuOpen={toggleMenu === SHOW}
				onClick={onMenuClick}
			/>
			<nav class={style[toggleMenu]} onClick={onMenuClick}>
        <GetInTouch
          className="primary"
          noArrow
          linkText="Login"
          href="https://myproject.nirmaan.app/"
          target="_blank"
        />
        <GetInTouch
          className="secondary"
          noArrow
          linkText="Contact Us"
          onClick={props.toggleEmailForm}
        />
			</nav>
    </>
  )
}

export default Navigation;
