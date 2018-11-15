import React, { Component } from 'react';
import Head from '../components/Head';
import Features from '../components/Features';

class Home extends Component {
    shouldComponentUpdate() {
        return false;
    };

    render() {
        return (
            <section className="container">
                <Head page="home" />
                <p>Howdy!</p>
                <p className="dash">&mdash;</p>
                <Features />
            </section>
        );
    };
};

export default Home;