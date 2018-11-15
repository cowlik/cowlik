import React, { Component } from 'react';
import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCaretRight, faEnvelopeSquare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';

WebFont.load({
    google: {
        families: ['Podkova:400,500,600,700,800']
    }
});

library.add(faGithubSquare, faLinkedin, faBars, faCaretRight, faEnvelopeSquare, faExternalLinkAlt);

class App extends Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
    };

    scrollToTop() {
        window.scrollTo(0, 0);
    };

    scrollToNav() {
        this.nav.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    render() {
        return (
            [
                <Header goTo={() => this.scrollToNav()} key="0" />,
                <Main key="1" />,
                <Nav ref={this.nav} goTo={() => this.scrollToTop()} key="2" />,
                <Footer key="3" />
            ]
        );
    };
};

export default App;
