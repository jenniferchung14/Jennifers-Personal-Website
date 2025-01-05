import React from 'react';
import { Link } from 'react-router-dom';
import jennifer from '../assets/favicon.png';
import resume from '../assets/Resume - Jennifer Chung.pdf';

function Header() {
  return (
    <>
        <nav class="navbar">
            <div class="logo">
                <a href="/main"><img src={jennifer} alt="Jennifer Chung" class="logo"/></a>
            </div>

            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>

                <div class="menu">
                    <li><Link to="/jennifer">A Deeper Dive!</Link></li>
                    <li><a href={resume} target="_blank">Jenn's Journey!</a></li>
                    <li><Link to="/projects">Code Gallery!</Link></li>
                </div>
            </ul>
        </nav>
    </>
  );
}

export default Header;