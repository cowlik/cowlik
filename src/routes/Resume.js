import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Resume.scss';
import app from '../data/app.json';

const Resume = () => (
    <section id="resume">
        <h1>{app.author}
            <button type="button" onClick={window.print}>
                <FontAwesomeIcon icon="print" />
            </button>
        </h1>
        <a href={'mailto:' + app.email}>{app.email}</a>
        <a href={app.url}>{app.url.replace('http://', '')}</a>
        <p className="dash">&mdash;</p>
        <h2>Experience:</h2>
        <h3>Senior Front-End Developer</h3>
        <h4>Cole &amp; Weber</h4>
        <p>January 2014 - March 2019</p>
        <br />
        <h3>Front-End Developer</h3>
        <h4>Cole &amp; Weber</h4>
        <p>July 2011 - August 2013</p>
        <br />
        <h3>Prototyper, MSN</h3>
        <h4>Microsoft | Allovus</h4>
        <p>December 2010 - July 2011</p>
        <br />
        <h3>Flash Developer</h3>
        <h4>Razorfish | Filter</h4>
        <p>April 2010 - December 2010</p>
        <br />
        <h3>Web Designer &amp; Flash Developer, Xbox.com</h3>
        <h4>Microsoft | Filter</h4>
        <p>March 2006 - January 2010</p>
        <p className="dash">&mdash;</p>
        <h2>Education:</h2>
        <h3>Art Institute of Seattle</h3>
        <h4>AAA, Interactive Media Design</h4>
        <p>2004 - 2006</p>
        <br />
        <h3>Art Institute of Seattle</h3>
        <h4>AAA, Visual Communications</h4>
        <p>1999 - 2001</p>
        <p className="dash">&mdash;</p>
        <h2>Technologies:</h2>
        <p>HTML, CSS, JavaScript, jQuery, React, LESS, SASS, Grunt, Gulp,
            <span>Razor (C#), Umbraco, Visual Studio, Git, Photoshop, Illustrator</span>
        </p>
    </section>
);

export default Resume;