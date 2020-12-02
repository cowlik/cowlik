import React, { Component } from 'react';
import ReactGA from 'react-ga';
import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
	faBars,
	faCaretRight,
	faEnvelopeSquare,
	faExternalLinkAlt,
	faLink,
	faPrint,
} from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import app from './data/app.json';

ReactGA.initialize(app.google.analytics.id, { debug: false });

WebFont.load({
	google: {
		families: ['Podkova:400,500,600,700,800'],
	},
});

library.add(
	faGithubSquare,
	faLinkedin,
	faEnvelope,
	faBars,
	faCaretRight,
	faEnvelopeSquare,
	faExternalLinkAlt,
	faLink,
	faPrint
);

class App extends Component {
	constructor(props) {
		super(props);
		this.nav = React.createRef();
	}

	componentDidMount() {
		this.trackPageview();
	}

	componentDidUpdate() {
		this.trackPageview();
	}

	trackPageview() {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}

	scrollToNav() {
		this.nav.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	render() {
		return [
			<Header goTo={() => this.scrollToNav()} key='0' />,
			<Main key='1' />,
			<Nav ref={this.nav} goTo={() => this.scrollToTop()} key='2' />,
			<Footer key='3' />,
		];
	}
}

export default App;
