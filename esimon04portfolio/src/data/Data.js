// src/data.js
import rythmImg from "./rythmRunner.png"
import ballsImg from "./balls.PNG"
import wizardImg from "./Wizard.PNG"
import cubeImg from "./CubeGame.PNG"

export const projects = [
  {
    title: "Rhythm Runner",
    description:
      "A rhythm game where the player controls a ship flying over tiles. The goal is to keep the ship on the tiles. Everything in the game is matched to the BPM of the song. I only have two levels while I wait to get music. In the meantime there is a test song that I got for free and Reptilia by The Strokes. Obviously Reptilia is copyrighted so it is purely a portfolio piece and not listed."
      + " Having everything match up to the BPM of the song was a fun system to design. In the future I would like to contract someone to make simple electronic music to go along with the game.",
    image: rythmImg,
    link: "https://esimon04.itch.io/rhythm-runner",
  },
  {
    title: "Falling Cubes",
    description:
      "Puzzle game where the user controls a block that rotates on it's edges. The goal is to step on every tile before leaving the level on the green tile. "
      + "At first I was creating the levels by drawing on a sprite sheet and then having a script that read from that to create the actual levels. Realizing that "
      + "I could make a level by just drawing lines that didn't overlap, I created a script to generate levels by doing just that. So every level is randomly generated and solvable.",
    image: cubeImg,
    link: "https://esimon04.itch.io/falling-cubes",
  },
  {
    title: "Wizarding Wizard",
    description:
      "Top down game where the player controls a wizard fighting monsters. This was a relatively simple learning project for myself. I wanted a basic premise where I could practice state systems, ability systems, and pixel-art. It has three basic enemies each with different"
      + " attack patterns. If I were to continue this game I would create a better progression system. Have the player start out with just a basic ability and as they progress through rounds let them choose new abilities.",
    image: wizardImg,
    link: "https://esimon04.itch.io/wizarding-wizard",
  },
  {
    title: "Just Two Balls",
    description:
      "Extremely simplistic multiplayer game to understand networking through unity. You can create a room and have another player join by entering the room code. Each player controls a ball that can shoot damage-dealing pellets. Goal is to kill your enemy and rack up a score. " +
      "If I were to continue this project I would add a round system (best of 3) and the loser of that round would be able to pick an upgrade - like a roguelite pvp game.",
    image: ballsImg,
    link: "https://esimon04.itch.io/2d-topdown-shooter",
  }
];