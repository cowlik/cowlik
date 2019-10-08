import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Resume.scss';
import app from '../data/app.json';

const Resume = () => (
    <section id="resume">
        <header id="resume-header">
            <h1>{app.author}
                <button type="button" onClick={window.print}>
                    <FontAwesomeIcon icon="print" />
                </button>
            </h1>
            <h4>{app.description}</h4>
            <a href={'mailto:' + app.email}>{app.email}</a>
            <a href="/" target="_blank">{app.url.replace('http://', '')}</a>
            <p className="dash">&mdash;</p>
        </header>
        <section id="resume-content">
            <aside>
                <h2>Objective:</h2>
                <p>Creative developer with 10+ years of experience building engaging websites in both advertising and software industries. Seeking a role in a collaborative team environment, writing exceptional code, and delivering a seamless user experience.</p>
                <p className="dash">&mdash;</p>
                <h2>Skills:</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>ReactJS</li>
                    <li>Gulp</li>
                    <li>Grunt</li>
                    <li>GIT</li>
                    <li>NPM</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Visual Studio</li>
                </ul>
                <p className="dash">&mdash;</p>
                <h2>Education:</h2>
                <h3>Art Institute of Seattle</h3>
                <h4>AAA, Interactive Media Design</h4>
                <p>2004 - 2006</p>
                <br />
                <h3>Art Institute of Seattle</h3>
                <h4>AAA, Visual Communications</h4>
                <p>1999 - 2001</p>
            </aside>
            <article>
                <h2>Experience:</h2>
                <h3>Senior Front-End Developer</h3>
                <h4>Cole &amp; Weber</h4>
                <p>January 2014 - March 2019</p>
                <ul>
                    <li>Built responsive websites for clients, such as <a href="/work/andeavor" target="_blank">Andeavor</a>, <a href="/work/benchmade" target="_blank">Benchmade</a>, <a href="/work/columbia-crest" target="_blank">Columbia Crest</a>, and <a href="/work/washingtons-lottery" target="_blank">Washington's Lottery</a></li>
                    <li>Proposed and successfully implemented new technologies for internal and client work</li>
                    <li>Wrote clean, reusable user interface components</li>
                </ul>
                <br />
                <h3>Front-End Developer</h3>
                <h4>Cole &amp; Weber</h4>
                <p>July 2011 - August 2013</p>
                <ul>
                    <li>Worked on a wide range of microsites, banner campaigns, and Facebook web applications</li>
                </ul>
                <br />
                <h3>Prototyper, MSN</h3>
                <h4>Microsoft | Allovus</h4>
                <p>December 2010 - July 2011</p>
                <ul>
                    <li>Rapidly prototyped forward-thinking website solutions for the MSN website, using Flash & HTML5</li>
                </ul>
                <br />
                <h3>Flash Developer</h3>
                <h4>Razorfish | Filter</h4>
                <p>April 2010 - December 2010</p>
                <ul>
                    <li>Helped build and launch the Microsoft KIN website</li>
                </ul>
                <br />
                <h3>Web Designer &amp; Flash Developer, Xbox.com</h3>
                <h4>Microsoft | Filter</h4>
                <p>March 2006 - January 2010</p>
                <ul>
                    <li>Built interactive components and experiences to promote video games and console accessories</li>
                    <li>Helped redesign Xbox.com</li>
                </ul>
            </article>
        </section>
    </section>
);

export default Resume;