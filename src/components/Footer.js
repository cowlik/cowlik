import React from 'react';
import './Footer.scss';

const Footer = () => (
    <footer id="footer">
        <p className="container">&copy; {new Date().getFullYear()}</p>
    </footer>
);

export default Footer;