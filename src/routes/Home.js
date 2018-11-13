import React, { Component } from 'react';
import Head from '../components/Head';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Head page="home" />
                <p>Howdy!</p>
                <p className="dash">&mdash;</p>
            </div>
        );
    };
};

export default Home;