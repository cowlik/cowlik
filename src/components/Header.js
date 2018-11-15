import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import work from '../data/work.json';

const Header = props => (
    <header id="header">
        <div className="container">
            <h1>
                <NavLink to="/">cowlik</NavLink>
            </h1>
            <button onClick={() => props.goTo()}>
                <FontAwesomeIcon icon="bars" />
            </button>
        </div>
        {work.map((item, i) => (
            <div className={"header-bg header-bg-" + (item.slug)} key={i}></div>
        ))}
    </header>
);

export default Header;