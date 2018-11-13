import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.scss';
import app from '../data/app.json';
import work from '../data/work.json';

const Nav = React.forwardRef((props, ref) => (
    <nav id="nav" ref={ref}>
        <div id="nav-contact" className="container">
            <a href="https://www.linkedin.com/in/clintharrison/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a href="https://github.com/cowlik" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github-square']} />
            </a>
            <a href={"mailto:" + app.email}>
                <FontAwesomeIcon icon="envelope-square" />
            </a>
            <p className="dash">&mdash;</p>
        </div>
        <h2 className="container">Latest Work:</h2>
        {work.map((item, i) => (
            <NavLink to={"/work/" + item.slug} className={(item.slug) + " nav-link"} onClick={() => props.goTo()} activeClassName="nav-link-selected" key={i}>
                <div className="container">{item.client}
                    <span>{item.title}
                        <FontAwesomeIcon icon="caret-right" />
                    </span>
                </div>
            </NavLink>
        ))}
    </nav>
));

export default Nav;