import React from "react";
import monsterScrn from '../../assets/images/projects/monster/monbatScrn.png';

export function MonsterCard() {
    return(
        <div />
    );
}

export function MonsterContent() {
    return(
        <div>
            <h1>Pokémon-style turn based system</h1>
            <img src={monsterScrn} alt="A screenshot of Fragmental, showing one of the puzzle rooms with 3 doors and one of the playable robots." />
            <a href="https://watsondynamite.itch.io/metroid-like-concept">Itch.io Download Link</a>
            <p>Controls:</p>
            <span> The game is controlled entirely with the mouse. </span>
            <p>
                WARNING: There is no win condition yet.
                When you or your opponent run out of monsters, close or reset the game.
            </p>
            <p>
                The goal of this project was to develop a competitve,
                PvP, 1v1 turn-based monster battler inspired by Pokémon.
                Since Unity is mostly used for games whose action plays out in real time,
                the challenge here was to place the flow of the game within a strictly synchronous and sequential
                system (player 1 attacks, player 2 takes damage, player 2 attacks, player 1 takes damage).
            </p>
            <p>
                Another goal of this project was also to make a very easily scalable game where adding new content is very simple.
                To achieve this, the stats of each monster and move are implemented in a data structure that works as the application’s model.
                Instead of working with prefabs that have their own behavior scripts, direct interaction between game objects is near non-existent,
                and the characters seen in the game are merely “puppeted” by a combat controller that oversees the match “behind the scenes”,
                in an MVC-like pattern. This makes the actual monster’s data very simple and as such,
                monster stats, abilities, moves and status effects can all be created through Scriptable Objects.
            </p>
            <p>
                This project has also taught me to work with IEnumerator methods for state machine-like behavior and delegates for dynamic method calling.
            </p>
            <p>
                Overall, this has been a very challenging project to work on, as it involves a lot of calculations and timing,
                more so than the other Unity projects I’ve worked on. One of the main challenges was getting the turn system
                to work properly, especially when attacking results in the death of one of the monsters. Since it’s a game mostly
                around calculations and stats, it was also a challenge to plan out the data structures that would allow me to define
                the properties of monsters and attacks, as well as implementing the effects of each attack.
            </p>
            <p>
                In addition, of all the small games and projects I’ve done over the years,
                this one was the one where I most felt that I applied my software engineering skills.
                Every mechanic I implemented had to follow some serious thinking and design before a single line
                of code was written.
            </p>
            <p>
                The environment’s models and textures are free assets.
                The UI graphics are a mix of Unity’s default UI sprites and custom made ones.
                The monsters themselves are the
                <a href="https://assetstore.unity.com/packages/3d/characters/meshtint-free-boximon-fiery-mega-toon-series-153958">
                    “Fiery”
                </a>
                and
                <a href="https://assetstore.unity.com/packages/3d/characters/meshtint-free-boximon-cyclopes-mega-toon-series-154436">
                    “Cyclopes”
                </a>
                “Boximon” assets made by Meshtint Studio.
            </p>
            <p>
                In the future, I am planning to implement networking, more playable creatures, as well as collaborating with artists in order to develop the game’s style and creatures.
            </p>
            <p>
                I’ve also created a
                <a href="https://www.youtube.com/watch?v=LRJvkXTV5SE&list=PLBGgHX4mVBxw21j0eHCUPld79rDFn_8zO">Youtube Playlist</a>
                in which I upload progress update videos showcasing the functionalities I implement into the project.
            </p>
        </div>
    )
}