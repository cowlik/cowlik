import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Main.scss';
import Nav from './Nav';
import Home from '../routes/Home';
import Work from '../routes/Work';

const Main = () => (
    <Router>
        <main id="main" className="container">
            <Route path="/" exact component={Home} />
            <Route path="/work/" component={Work} />
            <Nav />
        </main>
    </Router>
);

export default Main;