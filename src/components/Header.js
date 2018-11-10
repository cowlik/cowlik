import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import data from '../data/work.json';

const Header = props => (
    <header id="header">
        <div className="container">
            <h1>
                <Link to="/">cowlik</Link>
            </h1>
            <button onClick={() => props.goTo()}>
                <FontAwesomeIcon icon="bars" />
            </button>
        </div>
        {data.map((item, i) => (
            <div className={"header-bg header-bg-" + (item.slug)} key={i}></div>
        ))}
    </header>
);

export default Header;