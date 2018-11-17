import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Features.scss';
import work from '../data/work.json';

const Features = () => (
    <section id="features">
        <h2>Featured Work:</h2>
        <div>
            {work.map((item, i) => (
                item.feature ? (
                    <NavLink to={"/work/" + item.slug} className={"feature feature-" + item.slug} key={i}>
                        <div>
                            <img src={item.logo.feature.path} width={item.logo.feature.width} height={item.logo.feature.height} alt={item.client} />
                        </div>
                        <div>
                            <h3>{item.client}
                                <span>{item.title}</span>
                            </h3>
                            <div dangerouslySetInnerHTML={{ __html: item.description.short }} />
                            <p className="feature-more">See more<FontAwesomeIcon icon="caret-right" /></p>
                        </div>
                    </NavLink>
                ) : null
            ))}
        </div>
    </section>
);

export default Features;