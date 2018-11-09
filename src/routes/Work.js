import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Work.scss';
import data from '../data/work.json';

class Work extends Component {
    onImgLoaded(event) {
        event.target.className += " img-loaded";
    };

    render() {
        const item = data.find(item => item.slug === this.props.match.params.slug);

        return (
            <section className={item.slug}>
                <header id="work-header">
                    <div>
                        <div>
                            <h1>{item.client}
                                {(item.url !== "") ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}<FontAwesomeIcon icon="external-link-alt" /></a> : <span>{item.title}</span>}
                            </h1>
                        </div>
                        <div>
                            {(item.logo.path !== "") ? <img src={item.logo.path} width={item.logo.width} height={item.logo.height} className="logo" alt={item.client} /> : "&nbsp;"}
                        </div>
                    </div>
                </header>
                <section id="work-content">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: item.description }} />
                        <Aside item={item} />
                        <div id="work-screens">
                            {item.screens.map((value, i) => (
                                <img src={value.path} width={value.width} height={value.height} alt={value.title} key={i} className={(value.large) ? "work-screen-lrg" : null} onLoad={(event) => this.onImgLoaded(event)} />
                            ))}
                        </div>
                    </div>
                    <Aside item={item} />
                </section>
            </section>
        );
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