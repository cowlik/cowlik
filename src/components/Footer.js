import React from 'react';
import './Footer.scss';
import work from '../data/work.json';

const Footer = () => (
    <footer id="footer">
        <div className="container">
            <p>&copy; {new Date().getFullYear()}</p>
        </div>
        {work.map((item, i) => (
            <div className={"footer-bg footer-bg-" + (item.slug)} key={i}></div>
        ))}
    </footer>
);

export default Footer;