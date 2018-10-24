import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = () => (
    <header id="header">
        <div className="container">
            <h1>
                <a href="/">cowlik</a>
            </h1>
            <button>
                <FontAwesomeIcon icon="bars" />
            </button>
        </div>
    </header>
);

export default Header;