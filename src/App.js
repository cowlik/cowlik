import React from 'react';
import 'typeface-podkova';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCaretRight, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

library.add(faGithubSquare, faLinkedin, faBars, faCaretRight, faEnvelopeSquare);

const App = () => [<Header key="0" />, <Main key="1" />, <Footer key="2" />];

export default App;
