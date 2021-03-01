import React, {FormEvent} from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiItchDotIo } from 'react-icons/si';
import { FormLabel, TextField } from '@material-ui/core';
import { Element, Link } from 'react-scroll';
import emailjs from 'emailjs-com';

import profilePic from '../assets/images/watson.jpg';
import ProjectModal from '../components/ProjectModal';
import { FragmentalCard, FragmentalContent } from '../components/pages/Fragmental';
import { MetroidCard, MetroidContent } from '../components/pages/Metroid';
import { MonsterCard, MonsterContent } from '../components/pages/Monster';

interface Props {};

interface State {
    nameError: boolean;
    emailError: boolean;
    messageError: boolean;
    hasMessageSent: boolean;
    hasError: boolean;
}

const initialState: State = {
    emailError: false,
    messageError: false,
    nameError: false,
    hasMessageSent: false,
    hasError: false,
}

const fieldStyles = {
    root: "homePage__contacts__form__input",
};

export default class HomePage extends React.Component<Props, State> {
    state = initialState;

    renderBanner = (): JSX.Element => {

        return (
            <div className="homePage__banner border">
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
                        <div className="custom-button">
                            <Link to="contacts" smooth duration={300}>Contact Me</Link>
                        </div>
                        <div className="custom-button">
                            <Link to="projects" smooth duration={300}>Projects</Link>
                        </div>
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
        );
    }

    renderProjects = (): JSX.Element => {
        return (
            <Element  name="projects">
                <div className="homePage__projects">
                    <div className="homePage__subheader">
                        <h1>Projects</h1>
                        <h2>(Section under constant construction!)</h2>
                    </div>
                    <div className="homePage__projects__container">
                        <ProjectModal
                            cardChildren={<FragmentalCard />}
                        >
                            <FragmentalContent />
                        </ProjectModal>
                        <ProjectModal
                            cardChildren={<MetroidCard />}
                        >
                            <MetroidContent />
                        </ProjectModal>
                        <ProjectModal
                            cardChildren={<MonsterCard />}
                        >
                            <MonsterContent />
                        </ProjectModal>
                    </div>
                </div>
            </Element>
        );
    }

    onFieldChange = () => {
        this.setState({
            hasMessageSent: false,
            hasError: false,
        });
    }

    sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_pdaouoe', 'template_wiohj9g', e.target as HTMLFormElement, 'user_89MDY6ZBQdqzyFXqI5o5a')
            .then(() => {
                this.setState({
                    hasMessageSent: true,
                    hasError: false,
                });
            }, (error) => {
                console.log(error);
                this.setState({
                    hasError: true,
                });
            });
    }

    renderContacts = (): JSX.Element => {
        const {
            nameError,
            messageError,
            emailError,
            hasMessageSent,
            hasError,
        } = this.state;

        return (
            <Element name="contacts">
                <div className="homePage__contacts" >
                    <div className="homePage__subheader">
                        <h1>Contact Form</h1>
                        <h2>Feel free to contact me!</h2>
                    </div>
                    <form className="homePage__contacts__form border" onSubmit={this.sendEmail}>
                        <h1>To: jrld98@gmail.com</h1>
                        <TextField
                            required
                            label="Name / Company"
                            name="user_name"
                            error={nameError}
                            variant="outlined"
                            classes={fieldStyles}
                            onChange={this.onFieldChange}
                        />
                        <TextField
                            required
                            label="Email"
                            type="email"
                            name="user_email"
                            error={emailError}
                            variant="outlined"
                            classes={fieldStyles}
                            onChange={this.onFieldChange}
                        />
                        <TextField
                            required
                            multiline
                            rows={12}
                            rowsMax={12}
                            label="Message"
                            type="textarea"
                            name="message"
                            error={messageError}
                            variant="outlined"
                            classes={fieldStyles}
                            onChange={this.onFieldChange}
                        />
                        <button className="custom-button" type="submit">SEND</button>
                        {hasMessageSent && <p>Message sent!</p>}
                        {hasError && <p style={{color: 'red'}}>Sorry, an error occurred.</p>}
                    </form>
                </div>
            </Element>
        );
    }

    renderFooter = () => {
        return(
            <div className="homePage__footer">
                Created by João Dias using create-react-app, TypeScript, SASS, Material-UI, email-js, react-icons and react-scroll.
            </div>
        );
    }

    render() {

        return(
            <div className="homePage">
                {this.renderBanner()}
                {this.renderProjects()}
                {this.renderContacts()}
                {this.renderFooter()}
            </div>
        )
    }
}
