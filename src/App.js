import React from 'react';
import 'typeface-podkova';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';

library.add(faBars);

const App = () => [<Header key="0" />, <Main key="1" />];

export default App;
