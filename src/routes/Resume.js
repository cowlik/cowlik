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
            <h5>{app.description}</h5>
            <a href={'mailto:' + app.email}>{app.email}</a>
            <a href="/" target="_blank">{app.url.replace('http://', '')}</a>
            <p className="dash">&mdash;</p>
        </header>
        <section id="resume-content">
            <aside>
                <h2>Summary:</h2>
                <p>Creative developer, with 10+ years of experience, building engaging websites in both advertising and software industries. Specializes in web design, translating design to exceptional code, critical thinking, and team communication.</p>
                <p className="dash">&mdash;</p>
                <h2>Skills:</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>ReactJS</li>
                    <li>Gulp</li>
                    <li>Grunt</li>
                    <li>Git</li>
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
            <p className="dash">&mdash;</p>
            <article>
                <h2>Experience:</h2>
                <h3>Senior Front-End Developer</h3>
                <h4>Cole &amp; Weber</h4>
                <h5>January 2014 - March 2019</h5>
                <p>Solely responsible for all front-end web deliverables from conception to deployment. Successfully researched, proposed, and integrated new technologies into client work. Bridged the gap between designers, project managers, and back-end developers.</p>
                <ul>
                    <li>Built the layout and functionality to <a href="/work/benchmade" target="_blank">hunttheweb.com</a> using JavaScript (ES6) and SASS for an audience that ultimately exceeded 10K registrants</li>
                    <li>Developed the entire front end for the ADA compliant and responsive <a href="/work/washingtons-lottery" target="_blank">walottery.com</a>, as well as introducing new features and performing regular maintenance</li>
                    <li>Recommended and spearheaded testing for Umbraco, an open source .NET CMS, which became the foundation for <a href="/work/andeavor" target="_blank">andeavor.com</a></li>
                    <li>Discovered and utilized Harp, a static site generator, for producing our agency site <a href="/work/cole-weber" target="_blank">coleweber.com</a>, along with other websites requiring quick turnarounds</li>
                </ul>
                <br />
                <h3>Front-End Developer</h3>
                <h4>Cole &amp; Weber</h4>
                <h5>July 2011 - August 2013</h5>
                <ul>
                    <li>Incorporated JavaScript (ES5) and jQuery to develop the microsite <a href="/work/sightlife" target="_blank">The World Through New Eyes</a>, which also consumed a JSON file to manage the plethora of images</li>
                    <li>Assisted and developed landing pages for the Washington's Lottery mobile website and their Facebook &quot;Group Play&quot; web application</li>
                    <li>Created a variety of rich media banner campaigns</li>
                </ul>
                <br />
                <h3>Prototyper, MSN.com</h3>
                <h4>Microsoft <small>(Contract)</small></h4>
                <h5>December 2010 - July 2011</h5>
                <ul>
                    <li>Rapidly prototyped forward-thinking, website solutions for MSN.com, using a mixture Flash and jQuery</li>
                </ul>
                <br />
                <h3>Flash Developer, KIN.com</h3>
                <h4>Razorfish <small>(Contract)</small></h4>
                <h5>April 2010 - December 2010</h5>
                <ul>
                    <li>Worked with back-end developers, designers, and other Flash developers to produce landing pages and components for the launch of Microsoft's KIN.com</li>
                </ul>
                <br />
                <h3>Web Designer | Flash Developer, Xbox.com</h3>
                <h4>Microsoft <small>(Contract)</small></h4>
                <h5>March 2006 - January 2010</h5>
                <ul>
                    <li>Animated video game banners that were displayed with the highest visibility on the homepage of Xbox.com</li>
                    <li>Built rich, immersive Flash components and experiences to promote hardware and accessories</li>
                    <li>Created marketing assets for AAA game titles</li>
                    <li>Assisted and provided feedback for the 2008 redesign</li>
                </ul>
            </article>
        </section>
    </section>
);

export default Resume;