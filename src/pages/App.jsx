import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from './MainPage'; 
import Jennifer from './Jennifer';
import Projects from './Projects'; 

import '../styles/index.css';
import '../styles/App.css';
import '../styles/components/Header.css';
import '../styles/components/Footer.css';
import '../styles/Main.css';
import '../styles/Jennifer.css';
import '../styles/components/ProjectBox.css';
import '../styles/Projects.css';
import '../styles/components/IconBox.css';

function App() {
  const renderPage = (ComponentToRender) => (
    <>
      <Header/>
      <ComponentToRender/>
      <Footer/>
    </>
  );

  useEffect(() => {
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
      const textLength = line.textContent.length;
      const typingDuration = Math.max(textLength * 100, 2000); // minimum duration of 2000ms

      setTimeout(() => {
        line.classList.remove('hidden');
        line.classList.add('typing-effect');
        setTimeout(() => {
          line.classList.remove('typing-effect');
        }, typingDuration); // duration of the typing animation
      }, index * 1800); // delay between each line's typing effect
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <div className="centered desktop">
              <p className="line line_1 hidden">Hey there!<span className="wave">👋</span></p>
              <p className="line line_2 hidden">It seems you've stumbled your way onto Jennifer's website, welcome!</p>
              <p className="line line_3 hidden">{"Click below to find out more about her :)"}</p>
              <div className="centerButton">
                <Link to="/main">
                  <button id="discoverButton"><span>Discover More!</span></button>
                </Link>
              </div>
            </div>

            <div className="centered tablet">
              <p className="line line_1 hidden">Hey there!<span className="wave">👋</span></p>
              <p className="line line_2 hidden">It seems you've stumbled your</p>
              <p className="line line_3 hidden">way onto Jennifer's website, welcome!</p>
              <p className="line line_4 hidden">{"Click below to find out more about her :)"}</p>
              <div className="centerButton">
                <Link to="/main">
                  <button id="discoverButton"><span>Discover More!</span></button>
                </Link>
              </div>
            </div>

            <div className="centered mobile">
              <p className="lineStyling">Hey there!<span className="wave">👋</span></p>
              <p className="lineStyling">It seems you've</p>
              <p className="lineStyling">stumbled your way</p>
              <p className="lineStyling">onto Jennifer's</p>
              <p className="lineStyling">website, welcome!</p>
              <p className="lineStyling">Click below to find</p>
              <p className="lineStyling">{"out more about her :)"}</p>
              <div className="centerButton">
                <Link to="/main">
                  <button id="discoverButton"><span>Discover More!</span></button>
                </Link>
              </div>
            </div>
          </>
        } />
        <Route path="/main" element={<><Header/><Main/><Footer/></>}/>
        <Route path="/jennifer" element={renderPage(Jennifer)}/>
        <Route path="/projects" element={renderPage(Projects)}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
