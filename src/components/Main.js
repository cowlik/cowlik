import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './Main.scss';
import Home from '../routes/Home';
import Work from '../routes/Work';
import data from '../data/work.json';

const Main = () => (
    <main id="main" className="container">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work/:slug" exact component={Work} />
            <Redirect from="/work" to={"/work/" + data[0].slug} />
        </Switch>
    </main>
);

export default Main;