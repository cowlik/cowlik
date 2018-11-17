import React, { Component } from 'react';
import Head from '../components/Head';
import Features from '../components/Features';
import app from '../data/app.json';

class Home extends Component {
    shouldComponentUpdate() {
        return false;
    };

    render() {
        return (
            <section id="home" className="container">
                <Head page="home" />
                <p><strong>{app.author}</strong>, {app.description}</p>
                <p className="dash">&mdash;</p>
                <Features />
            </section>
        );
    };
};

export default Home;