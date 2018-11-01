import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Work.scss';
import data from '../data/work.json';

class Work extends Component {
    render() {
        const item = data.find(item => item.slug === this.props.match.params.slug);

        return (
            <section className={item.slug}>
                <header id="work-header">
                    <div>
                        <div>
                            <h1>{item.client}
                                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}
                                    <FontAwesomeIcon icon="external-link-alt" />
                                </a>
                            </h1>
                        </div>
                        <div>
                            <img src={'/imgs/work/' + item.slug + '/logo.svg'} width="124" height="98" className="logo" alt={item.client} />
                        </div>
                    </div>
                </header>
                <section id="work-content">

                </section>
            </section>

        );
    };
};

export default Work;