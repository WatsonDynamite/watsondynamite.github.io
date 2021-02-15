import React from "react";
import metroidScrn from '../../assets/images/projects/metroid/metroidScrn.png';

export function MetroidCard() {
    return (
        <div />
    );
}

export function MetroidContent() {
    return (
        <div>
            <h1>Metroid Prime-style First Person Shooter</h1>
            <img src={metroidScrn} alt="A screenshot of Fragmental, showing one of the puzzle rooms with 3 doors and one of the playable robots." />
            <a href="https://watsondynamite.itch.io/metroid-like-concept">Itch.io Download Link</a>
            <p>Controls:</p>
            <span>
                WASD - movement
                <br/>
                Spacebar - Jump
                <br/>
                Mouse - Aim
                <br/>
                Scroll Wheel - Change Temperature
                <br/>
                E near the button - spawn enemy
            </span>
            <p>
                The main goal of this project was the implementation of an FPS aiming system reminiscent of the Metroid Prime games,
                in which, contrary to the majority of modern FPSs,
                the aiming crosshair is not confined to the very center point of the screen and is instead mobile
                and controllable by the player, allowing aiming within a portion of the screen without rotating the camera.
            </p>
            <p>
                Additionally to this, I also wished to experiment with a gameplay mechanic involving
                manipulating the temperature of the player character’s suit, thus altering the properties of
                the projectiles fired by the weapon. The spawnable skull enemy reacts differently to different
                shot temperatures: cold temperatures will gradually freeze it, causing it to fall down and shatter into pieces,
                while hot temperatures will light it on fire, causing it to become aggressive.
            </p>
            <p>
                Finally, this game also served as a test for DOOM-styled enemies and UI elements reminiscent of the PlayStation era,
                utilizing pre-rendered sprites made from 3D models.
            </p>
            <p>
                The main challenge of this project was correctly firing the projectile to the direction intended by the player.
                The solution was to cast a ray from the camera towards the equivalent direction in the world space of the aiming
                crosshair, using Camera.ScreenToWorldSpace().
            </p>
            <p>
                That ray is used as the direction vector for another raycast that finds the first collidable object in its path.
                That collision point is used as the direction towards which the projectile is fired from the gun model. If no target is found,
                the aiming direction is simply a point very far away from the player in world space in the direction calculated from the aiming
                crosshair.
            </p>
            <p>
                As for the DOOM-style enemy sprite effect, the sprites originate from a 5 sprite sheet displaying
                5 viewing angles of the sprite. The sprite renderer is always facing the player (for a “billboarding” effect),
                but the enemy itself has its own rotation. The sprite to display is calculated from the angle between the forward
                facing direction of the player and the enemy. The sprite is inverted horizontally for the left-facing sprites.
            </p>
            <p>
                A similar process is used for when the player presses the “detonate” button:
                the incomplete robot object releases its pieces from the attachment points and then deletes itself.
                A small cooldown is implemented to prevent pieces from immediately reattaching as soon as the player releases them.
            </p>
            <p>
                Weapon and skull enemy models and textures were created by me, as well as all UI elements except for the "visor" effect
            </p>
            <p>
                This project also uses
                <a href="https://github.com/dsoft20/psx_retroshader">
                    a PSX shader created by dsoft20
                </a>
                and an
                <a href="https://assetstore.unity.com/packages/3d/props/exterior/polygon-prototype-pack-137126">
                    explosion particle from Synty Studios’s POLYGON prototyping asset pack
                </a>
            </p>
        </div>
    )
}