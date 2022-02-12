import { h } from "preact";

import { useState } from "preact/hooks";

import Hamburger from "../hamburger";
import LoginButton from "./login";

import style from "./style.css";

const SHOW = "show";
const HIDE = "hide";

const Navigation = () => {
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
      <div class={`${style.navCover} ${style[toggleMenu]}`} />
			<nav class={style[toggleMenu]} onClick={onMenuClick}>
				<a href="/#home">Home</a>
				<a href="/#our-services">Our Services</a>
				<a href="/#constructions">Constructions</a>
				<a href="/#requirements">Requirements</a>
				<a href="/#stop-chasing">Stop Chasing</a>
			</nav>
    </>
  )
}

export default Navigation;
