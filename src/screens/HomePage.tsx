import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiItchDotIo } from 'react-icons/si';

import profilePic from '../assets/images/watson.jpg';
import ProjectModal from '../components/ProjectModal';
import { FragmentalCard, FragmentalContent } from "../components/pages/Fragmental";


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
                    <div className="homePage__banner__content__buttons">
                        <input type="button" value="Contact Me" />
                        <input type="button" value="Projects" />
                    </div>
                </div>
                <div className="homePage__banner__image">
                    <img src={profilePic} alt={"avatar"}/>
                    <div className="homePage__banner__image__icons">
                        <div className="homePage__banner__image__icons__icon">
                            <a href="mailto:jrld98@gmail.com" >
                                <SiGmail />
                            </a>
                        </div>
                        <div className="homePage__banner__image__icons__icon">
                        <a href={'linkedin.com/in/joão-dias-a6493119b'}>
                            <FaLinkedin/>
                        </a>
                        </div>
                        <div className="homePage__banner__image__icons__icon">
                        <a href={'https://itch.io/profile/watsondynamite'}>
                            <SiItchDotIo/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homePage__projects">
                <div className="homePage__projects__subheader">
                    <h1>Projects</h1>
                </div>
                <div className="homePage__projects__container">
                    <ProjectModal
                        cardChildren={<FragmentalCard />}
                    >
                        <FragmentalContent />
                    </ProjectModal>
                    <ProjectModal
                        cardChildren={<FragmentalCard />}
                    >
                        <FragmentalContent />
                    </ProjectModal>
                    <ProjectModal
                        cardChildren={<FragmentalCard />}
                    >
                        <FragmentalContent />
                    </ProjectModal>
                    <ProjectModal
                        cardChildren={<FragmentalCard />}
                    >
                        <FragmentalContent />
                    </ProjectModal>
                    <ProjectModal
                        cardChildren={<FragmentalCard />}
                    >
                        <FragmentalContent />
                    </ProjectModal>
                    <ProjectModal
                        cardChildren={<FragmentalCard />}
                    >
                        <FragmentalContent />
                    </ProjectModal>
                </div>
            </div>
        </div>
    )
}

export default HomePage;