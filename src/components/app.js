import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import GoToTop from "./gototop";

import "../style/index.css";

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';


const App = () => (
	<div id="app">
		<div class="layout">
			<Header />
			<Home />
			<GoToTop />
		</div>
		<footer>
		info@nirmaan.app | +91-9835377587
		</footer>
	</div>
)

export default App;
