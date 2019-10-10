import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Work.scss';
import NotFound from './NotFound';
import Head from '../components/Head';
import work from '../data/work.json';

class Work extends Component {
    constructor(props) {
        super(props);
        this.item = {};
    };

    onImgLoaded(event) {
        const
            assetElems = document.getElementsByClassName('work-asset'),
            imgElems = document.getElementById('work-assets').getElementsByTagName('img'),
            imgsLength = imgElems.length;

        let id = parseInt(event.target.getAttribute('data-id'));

        if (id === imgsLength - 1) {
            ScrollReveal().reveal(assetElems, {
                duration: 500,
                easing: 'ease-out',
                viewOffset: {
                    bottom: 100
                }
            });
        }
    };

    setItem() {
        this.item = work.find(item => item.slug === this.props.match.params.slug);
    };

    shouldComponentUpdate() {
        return false;
    };

    render() {
        this.setItem();

        if (!this.item) {
            return <NotFound />;
        } else {
            return (
                <section id="work">
                    <Head item={this.item} page="work" />
                    <header id="work-header">
                        <div>
                            <div>
                                <h1>{this.item.client}
                                    {(this.item.url !== '') ? <a href={this.item.url} target="_blank" rel="noopener noreferrer">{this.item.title}<FontAwesomeIcon icon="external-link-alt" /></a> : <span>{this.item.title}</span>}
                                </h1>
                            </div>
                            <div>
                                {(this.item.logo.work.src !== '') ? <img src={this.item.logo.work.src} width={this.item.logo.work.width} height={this.item.logo.work.height} className="logo" alt={this.item.client} /> : '&nbsp;'}
                            </div>
                        </div>
                    </header>
                    <section id="work-content">
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: this.item.description.long }} />
                            <Aside item={this.item} />
                            <div id="work-assets">
                                {this.item.assets.map((value, i) => {
                                    if (value.type && value.type === 'video') {
                                        return (
                                            <div className="work-asset" key={i}>
                                                <div className="container-video">
                                                    <iframe src={value.src} width={value.width} height={value.height} title={value.title} frameBorder="0" allowFullScreen></iframe>
                                                </div>
                                                <p><small><em>{value.title}</em></small></p>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className="work-asset" style={(value.width < 800) ? { maxWidth: value.width + 'px' } : null} key={i}>
                                                <img src={value.src} width={value.width} height={value.height} alt={value.title} data-id={i} onLoad={(event) => this.onImgLoaded(event)} />
                                                <p><small><em>{value.title}</em></small></p>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <Aside item={this.item} />
                    </section>
                </section>
            );
        }
    };
};

const Aside = props => (
    <aside>
        <div>
            <h3>Launched:</h3>
            <p>{props.item.date}</p>
            <h3>Responsibilities:</h3>
            <ul>
                {props.item.responsibilities.map((value, i) => (
                    <li key={i}>{value}</li>
                ))}
            </ul>
        </div>
        <div>
            <h3>Technologies:</h3>
            <ul>
                {props.item.technologies.map((value, i) => (
                    <li key={i}>{value}</li>
                ))}
            </ul>
        </div>
    </aside>
);

export default Work;