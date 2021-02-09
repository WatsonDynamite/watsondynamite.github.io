import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import {SiDiscord, SiGmail, SiItchDotIo} from 'react-icons/si';

import profilePic from '../assets/images/watson.jpg';


function HomePage() {
    return(
        <div className="homePage">
            <div className="homePage__banner">
                <div className="homePage__banner__content">
                    <div className="homePage__banner__content__titles">
                        <h1>João Dias</h1>
                        <h2>Software Developer</h2>
                    </div>
                    <div className="homePage__banner__content__aboutme">
                        <h4> My name is João Dias (though you may know me as Watson), and I am a recent Computer Engineering graduate (Politechnic of Leiria, Portugal), hoping to enter the gaming industry. </h4>
                        <h4> I have skills in developing software in a variety of programming languages (Java, C, C# , Javascript) and environments (Android, Unity, Node.js). </h4>
                        <h4>Videogames have always been my passion from a very early age. I started tinkering with game creation tools when I was 10 years old and ever since my dream career has lied in the world of game development.</h4>
                        <h4>This portfolio is a compendium of a few small personal projects and protoypes I developed in my free time that I consider to be most fit to represent my skills. I developed these projects not only out of passion for game development, but also as learning experiences or to test out specific game mechanics. To me, nothing is more valuable than knowledge and I love learning whenever I can.</h4>
                        <h4>Each game has a link to a playable version as well as small description explaining the intended learning goal for each project and the difficulties in its development.</h4>
                    </div>
                </div>
                <div className="homePage__banner__image">
                    <img src={profilePic} alt={"avatar"}/>
                </div>
            </div>
            <div className="homePage__subheader">
                <h2>Contacts</h2>
                <h4>Feel free to contact me!</h4>
                <ul>
                    <li>
                        <SiGmail/> <span>jrld98@gmail.com</span>
                    </li>
                    <li>
                        <FaLinkedin/> <span><a href={'linkedin.com/in/joão-dias-a6493119b'}>linkedin.com/in/joão-dias-a6493119b</a></span>
                    </li>
                    <li>
                        <SiItchDotIo/> <span><a href={'https://itch.io/profile/watsondynamite'}>https://itch.io/profile/watsondynamite</a></span>
                    </li>
                    <li>
                        <SiDiscord/> Watson Dynamite#2323
                    </li>
                </ul>
            </div>
            <div className="homePage__projects">
                <h1>Projects</h1>
            </div>
        </div>
    )
}

export default HomePage;