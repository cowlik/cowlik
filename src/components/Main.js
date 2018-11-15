import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './Main.scss';
import Home from '../routes/Home';
import Work from '../routes/Work';
import work from '../data/work.json';

const Main = () => (
    <main id="main" className="container">
        <Route render={({ location }) => (
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Switch location={location}>
                        <Route path="/" exact component={Home} />
                        <Route path="/work/:slug" exact component={Work} />
                        <Redirect from="/work" to={"/work/" + work[0].slug} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )} />
    </main>
);

export default Main;