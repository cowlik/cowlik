import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import app from '../data/app.json';

class Head extends Component {
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

    setHtmlClass() {
        return (this.props.page === 'work') ? <html class={this.props.item.slug} /> : null;
    };

    render() {
        return (
            <Helmet>
                {this.setHtmlClass()}

                <title>{this.getTitle()}</title>

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