import React from 'react';

import './style.css';
import flowerPatch from '../../img/FlowerpatchHome.png';


const Flowerpatch = () => {
    return  (
        <div className={"card"}>
            <a href={"https://flowerpatch.app/"} >
                <img src={flowerPatch} alt={"FlowerPatch Game"} width={"100%"}/>
                <div className={"words"}>
                    <h5>FlowerPatch</h5>
                    <p>Flowerpatch is a peaceful Ethereum indie game about farming cannabis.</p>
                    <a href={"https://flowerpatch.app/game"}><button>Try it now</button></a>
                </div>
            </a>
        </div>
    );
};

export default Flowerpatch;