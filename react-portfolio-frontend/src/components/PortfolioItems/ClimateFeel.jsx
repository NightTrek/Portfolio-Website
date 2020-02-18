import React from 'react';

import './style.css';
import ClimateFeel from '../../img/ClimateFeel.png';


const WordGuessGame = () => {
    return  (
        <div className={"card"}>
            <a href={"https://tonedef00.github.io/Climate-Feel-App/"} >
                <img src={ClimateFeel} alt={"Trivia Game"} width={"100%"}/>
                <div className={"words"}>
                    <h5>Climate Feel</h5>
                    <p>A website showing you real weather data over the past 20 years</p>
                    <a href={"https://github.com/ToneDef00/Climate-Feel-App"}><button>Github</button></a>
                </div>
            </a>
        </div>
    );
};

export default WordGuessGame;