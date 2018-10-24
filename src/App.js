import React from 'react';
import 'typeface-podkova';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Header from './components/Header';

library.add(faBars);

const App = () => <Header />;

export default App;
