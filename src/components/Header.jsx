import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import jennifer from '../assets/favicon.png';

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
                        <div><Link to="/jennifer" onClick={closeMenu}><li>A Deeper Dive!</li></Link></div>
                        {/* <li><a href={resume} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Jenn's Journey!</a></li> */}
                        <div><Link to="/experience" onClick={closeMenu}><li>Jenn's Journey!</li></Link></div>
                        <div><Link to="/projects" onClick={closeMenu}><li>Code Gallery!</li></Link></div>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default Header;