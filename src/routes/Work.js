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
        if (event.target.classList[0] !== 'logo')
            ScrollReveal().reveal(event.target, {
                distance: '20px',
                duration: 500,
                easing: 'ease-out',
                viewOffset: {
                    bottom: 120
                }
            });
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
                                    {(this.item.url !== "") ? <a href={this.item.url} target="_blank" rel="noopener noreferrer">{this.item.title}<FontAwesomeIcon icon="external-link-alt" /></a> : <span>{this.item.title}</span>}
                                </h1>
                            </div>
                            <div>
                                {(this.item.logo.work.path !== "") ? <img src={this.item.logo.work.path} width={this.item.logo.work.width} height={this.item.logo.work.height} className="logo" alt={this.item.client} onLoad={(event) => this.onImgLoaded(event)} /> : "&nbsp;"}
                            </div>
                        </div>
                    </header>
                    <section id="work-content">
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: this.item.description.long }} />
                            <Aside item={this.item} />
                            <div id="work-screens">
                                {this.item.screens.map((value, i) => (
                                    <img src={value.path} width={value.width} height={value.height} alt={value.title} key={i} className={(value.width >= 800) ? "work-screen-lrg" : null} onLoad={(event) => this.onImgLoaded(event)} />
                                ))}
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