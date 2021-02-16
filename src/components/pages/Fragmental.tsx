import React from "react";

import fragmentalScrn from '../../assets/images/projects/fragmental/fragmentalScrn.png';
import fragmentalCard from '../../assets/images/projects/fragmental/fragmentalCard.png';
import {DialogContent, DialogTitle} from "@material-ui/core";

export function FragmentalCard() {
    return(
        <>
            <img src={fragmentalCard} />
            <h3>FRAGMENTAL</h3>
        </>
    );
}

export function FragmentalContent() {
    return(
        <div className="project-modal__modal">
            <DialogTitle>
                <h1 className="project-modal__modal__title">"Fragmental" - Global Game Jam 2020</h1>
            </DialogTitle>
            <DialogContent>
                <div className="project-modal__modal__content">
                    <div className="project-modal__modal__content__header">
                        <div className="project-modal__modal__content__header__image">
                            <img src={fragmentalScrn} alt="A screenshot of Fragmental, showing one of the puzzle rooms with 3 doors and one of the playable robots." />
                            <a href="https://tiago-silva.itch.io/fragmental"> Itch.io Download Link</a>
                        </div>
                        <span className="project-modal__modal__content__header__intro">
                        This game was my team’s entry for the Global Game Jam 2020, where the theme was “Repair”.
                        It’s a Portal-inspired puzzle game where the main mechanic is swapping playable characters by putting together their 3 pieces.
                        The goal of each puzzle is to place 3 robot pieces into the funnel near the goal door.
                        <br/>
                        Each playable robot has its own special ability and clever swapping is key to solve the various puzzles.
                        This game was a fantastic learning experience.
                        Not only was this the first time I could 100% focus on the game’s programming
                        (since the other 2 members of my team were both dedicated artists),
                        it was also an opportunity to experiment with level design in a puzzle game
                        as well as certain mechanics that I had been wanting to experiment with for a long while.
                    </span>
                    </div>
                    <div className="project-modal__modal__content__body">
                        <h1>What I learned / Challenges</h1>
                        <p>
                            While this wasn’t the first game jam I participated in,
                            it was still a great experience in working under a deadline and in managing a small team.
                        </p>
                        <p>
                            The main challenge in developing this game was implementing the picking up and carrying mechanic
                            (since Unity physics tend to be rather temperamental)
                            and the character-swapping mechanic. For that mechanic, whenever 2 pieces of the same robot collide,
                            the game instantiates an “empty” object with 3 separate attachment points,
                            and then attaches each piece to its corresponding points.
                            When all 3 pieces are parented to their points,
                            the object is removed and replaced with the playable character.
                            The original playable character is removed, and in its position 3 pieces are spawned.
                        </p>
                        <p>
                            A similar process is used for when the player presses the “detonate” button:
                            the incomplete robot object releases its pieces from the attachment points and then deletes itself.
                            A small cooldown is implemented to prevent pieces from immediately reattaching as soon as the player releases them.
                            Overall, I’m extremely happy with this project, although sadly it is a little buggy.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </div>
    )
}