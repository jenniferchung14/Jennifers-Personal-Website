import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import jennifer from '../assets/favicon.png';
import resume from '../assets/Resume - Jennifer Chung.pdf';

function Header() {
    
    const checkboxRef = useRef(null);

    const closeMenu = () => {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    };
    
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <a href="/main"><img src={jennifer} alt="Jennifer Chung" className="logo"/></a>
                </div>

                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" ref={checkboxRef}/>
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                    <div className="menu">
                        <li><Link to="/jennifer" onClick={closeMenu}>A Deeper Dive!</Link></li>
                        <li><a href={resume} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Jenn's Journey!</a></li>
                        <li><Link to="/projects" onClick={closeMenu}>Code Gallery!</Link></li>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default Header;