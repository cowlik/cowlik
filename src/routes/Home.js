import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
        this.setPageClass();
        this.setTitle();
    };

    componentDidUpdate() {
        this.setPageClass();
        this.setTitle();
    }

    setPageClass() {
        document.getElementsByTagName("html")[0].className = "";
    };

    setTitle() {
        document.title = "Clint Harrison | cowlik";
    };

    render() {
        return (
            <div className="container">
                <p>Howdy!</p>
                <p className="dash">&mdash;</p>
            </div>
        );
    };
};

export default Home;