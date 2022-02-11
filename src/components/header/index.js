import { h } from 'preact';

import Navigation from "./navigation";

import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<div class={style.navigation}>
			<div class={style.brandLogo}>
				<img width={175} src="../../assets/nirmaan-logo.png" />
			</div>
			<Navigation />
		</div>
	</header>
);

export default Header;
