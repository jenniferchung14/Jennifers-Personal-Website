import React from 'react';
import jennifer from '../assets/jennifer.jpg';

function Main() {
  return (
    <>
    <div className="main-page">
      <div className="container">
        <div className="text-area">
            <h1>Nice to meet you!</h1>
            <p>I'm Jennifer and I am in my fifth and final year of Computer Science at <b><a href="https://www.torontomu.ca/" className="a-links" target="_blank">Toronto Metropolitan University</a></b> <i>{"(formerly Ryerson)"}</i>, where I am also minoring in Psychology. I'm an aspiring Software Engineer who currently has a keen interest in web and front-end development.</p>
            <p>I'm currently looking for a full-time new grad position!</p>
            <p>Click around and continue your joruney of getting to know more about me or click <b><a href="/" className="a-links">reset</a></b> and begin your journey again!! {":)"}</p>
        </div>

        <div className="portrait">
            <img className="jenn" src={jennifer} alt="A picture of Jennifer Chung"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Main;