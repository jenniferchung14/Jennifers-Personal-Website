import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <>
        <footer className="footer-styling">
            <p>{"thanks for stopping by! hope you enjoyed your time here :)"}</p>
            <p>© 2025 Jennifer Chung</p>
            <li className="li-footer">
                <a href="mailto: jennifer.chung@torontomu.ca">
                    <i className="fa fa-envelope"></i>
                </a>
            </li>
            <li className="li-footer">
                <a href="https://github.com/jenniferchung14" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
            </li>
            <li className="li-footer">
                <a href="https://www.linkedin.com/in/jenniferchung14" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </a>
            </li>
        </footer>
    </>
  );
}

export default Footer;