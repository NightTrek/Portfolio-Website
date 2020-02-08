import React from 'react';

import './style.css';
import TriviaGame from '../../img/TriviaGame1.png';


const WordGuessGame = () => {
    return  (
        <div className={"card"}>
            <a href={"https://tonedef00.github.io/trivia-game/"} >
                <img src={TriviaGame} alt={"Trivia Game"} width={"100%"}/>
                <div className={"words"}>
                    <h5>Basic Trivia Game</h5>
                    <p>A timed Trivia Game using JQuery and a Trivia API</p>
                    <a href={"https://github.com/ToneDef00/trivia-game"}><button>Github</button></a>
                </div>
            </a>
        </div>
    );
};

export default WordGuessGame;