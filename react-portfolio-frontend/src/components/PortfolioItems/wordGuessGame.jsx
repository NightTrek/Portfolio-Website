import React from 'react';

import './style.css';
import wordGuessGame from '../../img/wordGuessGame.png';


const WordGuessGame = () => {
  return  (
    <div className={"card"}>
        <a href={"https://tonedef00.github.io/Word-guess-game/"} >
            <img src={wordGuessGame} alt={"Word Guess Game"} width={"100%"}/>
            <div className={"words"}>
                <h5>Word guess Game</h5>
                <p>A super lightweight vanilla javascript game</p>
                <a href={"https://github.com/ToneDef00/Word-guess-game"}><button>Github</button></a>
            </div>
        </a>
    </div>
  );
};

export default WordGuessGame;