import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import app from '../data/app.json';
import work from '../data/work.json';

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
        const htmlElem = document.getElementsByTagName('html')[0];

        work.map((item, i) => (
            htmlElem.classList.remove(item.slug)
        ));

        return (this.props.page === 'work') ? htmlElem.classList.add(this.props.item.slug) : null;
    };

    render() {
        return (
            <Helmet>
                {this.setHtmlClass()}

                <title>{this.getTitle()}</title>

                <meta property="og:title" content={this.getTitle()} />
                <meta property="og:url" content={this.getUrl()} />
                <meta name="twitter:title" content={this.getTitle()} />
            </Helmet>
        );
    };
};

export default Head;