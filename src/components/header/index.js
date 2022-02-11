import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import Navigation from "./navigation";

import style from './style.css';

const Header = () => {
	const [showHeaderBg, setShowHeaderBg] = useState(false);

	useEffect(() => {
		const onScrollHandler = () => {
			console.log('HErr');
			if (window.scrollY < 20) {
				setShowHeaderBg(false);
			} else {
				setShowHeaderBg(true);
			}
		}

		window.addEventListener('scroll', onScrollHandler);

		return () => {
			window.removeEventListener('scroll', onScrollHandler);
		}
	}, []);
  return (
		<header class={style.header}>
			<div class={`${style.headerBg} ${showHeaderBg ? style.appear : ''}`} />
			<div class={style.navigation}>
				<div class={style.brandLogo}>
					<img width={175} src="../../assets/nirmaan-logo.png" />
				</div>
				<Navigation />
			</div>
		</header>
	)
};

export default Header;
