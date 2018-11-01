import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = () => (
    <header id="header">
        <div className="container">
            <h1>
                <Link to="/">cowlik</Link>
            </h1>
            <button>
                <FontAwesomeIcon icon="bars" />
            </button>
        </div>
    </header>
);

export default Header;