import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
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
                    <Feature item={item} key={i} />
                ) : null
            ))}
        </div>
    </section>
);

const Feature = props => {
    useEffect(() => {
        ScrollReveal().reveal('.feature-' + props.item.slug, {
            distance: '20px',
            duration: 500,
            easing: 'ease-out'
        });
    });

    return (
        <NavLink to={"/work/" + props.item.slug} className={"feature feature-" + props.item.slug}>
            <div>
                <img src={props.item.logo.feature.path} width={props.item.logo.feature.width} height={props.item.logo.feature.height} alt={props.item.client} />
            </div>
            <div>
                <h3>{props.item.client}
                    <span>{props.item.title}
                        <FontAwesomeIcon icon="caret-right" />
                    </span>
                </h3>
                <div dangerouslySetInnerHTML={{ __html: props.item.description.short }} />
            </div>
        </NavLink>
    );
};

export default Features;