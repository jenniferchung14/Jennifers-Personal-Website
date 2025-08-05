import React from 'react';
import matcha from '../assets/matchamatcha.jpg';
import cscu from '../assets/cscu.jpg';
import smiski from '../assets/smiski.jpg';

function Jennifer() {
  return (
    <>
    <div className="container2">
        <div className="text-area2">
            <h1>Step into the world of Jennifer!</h1>
            <p>I was born and raised in Toronto.</p>
            <p>I am currently the <b>system administrator</b> for the <b><a href="https://tmucscu.com/" className="a-links" target="_blank">TMU Computer Science Course Union (CSCU)</a>.</b> I have been in the CSCU since my first year of university and my previous roles include VP Operation, deputy VP Operation, VP Academics and deputy VP Academics.</p> 
            <p>I am a night owl who loves to discover new music artists, collect little green figures (Smiskis), dabble in video games and binge watch shows…but don’t get me wrong I also love to sleep and certify myself as a professional napper. I also love to spend quality time and hang out with my friends, explore the city and try out new restaurants and cafes. <i>Fun fact:</i> my new obsession has been the thai iced green tea from Koh Lipe!</p> 
            <p>Last but not least…I am always learning and open to new opportunities!! Feel free to connect with me on <b><a href="https://www.linkedin.com/in/jenniferchung14" class="a-links" target="_blank">LinkedIn</a></b> or shoot me an <b><a href="mailto: jennifer.chung@torontomu.ca" className="a-links" target="_blank">email</a></b> {":)"}</p>
        </div>

        <div className="pictures"> 
            <div className="image-container">
                <img src={matcha} alt="Matcha Matcha" width="254px" height="254px"/>
                <div className="image-overlay">Matcha lattes from a cafe in Toronto (Matcha Matcha)
                </div>
            </div>

            <div className="image-container">
                <img src={cscu} alt="CSCU 2023 Bar Night" height="254px"/>
                <div className="image-overlay">CSCU 2023 Bar Night</div>
            </div>

            <div className="image-container">
                <img src={smiski} alt="Jennifer's favourite Smiski" width="254px" height="254px"/>
                <div className="image-overlay">My favourite Smiski I have collected so far</div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Jennifer;