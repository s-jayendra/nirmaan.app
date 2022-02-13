import { h } from 'preact';
import { useState } from 'preact/hooks';

import Header from './header';
import GoToTop from "./gototop";
import Email from '../routes/home/email';

import "../style/index.css";

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Footer from './footer';


const App = () => {
	const [visible, setEmailVisibility] = useState(false);

  const toggleEmailForm = () => {
    setEmailVisibility(!visible);
  }

	return (
		<div id="app">
			{
        visible && <Email toggleEmailForm={toggleEmailForm} />
      }
			<div class="layout">
				<Header toggleEmailForm={toggleEmailForm} />
				<Home />
			</div>
			<Footer />
			<GoToTop />
		</div>
	)
};

export default App;
