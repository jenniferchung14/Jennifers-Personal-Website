import React from 'react';
import jennifer from '../assets/jennifer.jpg';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
    <div className="main-page">
      <div class="container">
        <div class="text-area">
            <h1>Nice to meet you!</h1>
            <p>I'm Jennifer, a fourth year Computer Science student at <b><a href="https://www.torontomu.ca/" class="a-links" target="_blank">Toronto Metropolitan University</a></b> <i>{"(formerly Ryerson)"}</i>, where I am also minoring in Psychology. I'm an aspiring Software Engineer who currently has a keen interest in web and front-end development.</p>
            <p>I'm currently looking for a Summer 2025 internship position!</p>
            <p>Click around and continue your joruney of getting to know more about me or click <b><a href="/" class="a-links">reset</a></b> and begin your journey again!! {":)"}</p>
        </div>

        <div class="portrait">
            <img className="jenn" src={jennifer} alt="A picture of Jennifer Chung"/>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default Main;