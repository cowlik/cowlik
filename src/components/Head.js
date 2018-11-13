import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import app from '../data/app.json';

class Head extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    };

    getTitle() {
        return (this.props.page === 'work') ? this.props.item.client + ' - ' + this.props.item.title + " | " + app.title : app.author + " | " + app.title;
    };

    getUrl() {
        return window.location.href;
    };

    getDomain() {
        let domain = window.location.hostname;
        return (domain !== 'localhost') ? window.location.protocol + '//' + domain : '';
    };

    render() {
        return (
            <Helmet>
                <title>{this.getTitle()}</title>

                <meta charset="utf-8"></meta>
                <meta name="description" content={app.description} />
                <meta name="robots" content="index, nofollow" />
                <meta name="theme-color" content={app.theme_color} />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta property="fb:app_id" content={app.facebook.app_id} />
                <meta property="og:description" content={app.description} />
                <meta property="og:image" content={this.getDomain() + "/imgs/card-facebook.png"} />
                <meta property="og:title" content={this.getTitle()} />
                <meta property="og:url" content={this.getUrl()} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={app.description} />
                <meta name="twitter:image" content={this.getDomain() + "/imgs/card-twitter.png"} />
                <meta name="twitter:title" content={this.getTitle()} />
            </Helmet>
        );
    };
};

export default Head;