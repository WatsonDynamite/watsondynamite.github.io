import React from "react";
import monsterScrn from '../../assets/images/projects/monster/monbatScrn.png';
import monsterCard from '../../assets/images/projects/monster/monsterCard.png';
import monsterScriptable from '../../assets/images/projects/monster/monsterScriptable.png';
import moveScriptable from '../../assets/images/projects/monster/moveScriptable.png';
import {DialogContent, DialogTitle} from "@material-ui/core";

export function MonsterCard() {
    return(
        <>
            <img src={monsterCard} />
            <h3>MONSTER</h3>
            <h3> GAME</h3>
        </>
    );
}

export function MonsterContent() {
    return(
        <div className="project-modal__modal">
            <DialogTitle>
                <h1 className="project-modal__modal__title">Pokémon-style turn based system</h1>
            </DialogTitle>
            <DialogContent>
                <div className="project-modal__modal__content">
                    <div className="project-modal__modal__content__header">
                        <div className="project-modal__modal__content__header__image">
                            <img src={monsterScrn} alt="A screenshot of the Untitled Monster Game, showing a Pokémon-like battle scene." />
                            <a href="https://watsondynamite.itch.io/monbat-game"> Itch.io Download Link</a>
                        </div>
                        <span className="project-modal__modal__content__header__intro">
                            Controls: The game is controlled entirely with the mouse.
                            WARNING: There is no win condition yet. When you or your opponent run out of monsters, close or reset the game.
                            <br/>
                            The goal of this project was to develop a competitve, PvP, 1v1 turn-based monster battler inspired by Pokémon.
                            Since Unity is mostly used for games whose action plays out in real time, the challenge here was to place the flow of the game
                            within a strictly synchronous and sequential system
                            (player 1 attacks, player 2 takes damage, player 2 attacks, player 1 takes damage).
                        </span>
                    </div>
                    <div className="project-modal__modal__content__body">
                        <p>
                            Another goal of this project was also to make a very easily scalable game where adding new content
                            is very simple.
                            To achieve this, the stats of each monster and move are implemented
                            in a data structure that works as the application’s model.
                            Instead of working with prefabs that have their own behavior scripts,
                            direct interaction between game objects is near non-existent,
                            and the characters seen in the game are merely “puppeted” by a combat controller
                            that oversees the match “behind the scenes”, in an MVC-like pattern.
                            This makes the actual monster’s data very simple and as such,
                            new monsters, moves, etc. can be easily created through the use of ScriptableObjects:
                        </p>
                        <div className="project-modal__modal__content__body__image-row">
                            <img src={monsterScriptable} alt="the monster's scriptableObject implementation, showing stats and moves" />
                            <img src={moveScriptable} alt="an example of the Move's scriptableObject implementation" />
                        </div>
                        <p>
                            This project has also taught me to work with IEnumerator methods for state machine-like behavior and delegates for dynamic method calling.
                            <br/>
                            Overall, this has been a very challenging project to work on, as it involves a lot of calculations
                            and timing, more so than the other Unity projects I’ve worked on. One of the main challenges was
                            getting the turn system to work properly, especially when attacking results in the death of one of
                            the monsters. Since it’s a game mostly around calculations and stats, it was also a challenge to plan
                            out the data structures that would allow me to define the properties of monsters and attacks, as well
                            as implementing the effects of each attack.
                            <br/>
                            In addition, of all the small games and projects I’ve done over the years, this one was the one that really got my software engineering brain going.
                            It was the first time I had worked with data structures in a game development environment, since it was the first time I
                            needed to work on a game whose mechanics weren't assisted by the real-time aspect of the Unity engine.
                            <br/>
                            The environment’s models and textures are free assets. The UI graphics are a mix of Unity’s default UI sprites and custom made ones.
                            The monsters themselves are the “Fiery” and “Cyclopes” “Boximon” assets made by Meshtint Studio.
                            <br />
                            In the future, I am planning to implement networking, more playable creatures, as well as collaborate with artists in order to develop the game’s style and creatures.
                            <br />
                            I’ve also created a Youtube Playlist in which I upload progress update videos showcasing the functionalities I implement into the project.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </div>
    )
}