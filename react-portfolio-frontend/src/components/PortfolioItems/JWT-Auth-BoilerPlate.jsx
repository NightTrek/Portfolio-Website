import React from 'react';

import './style.css';
import JWTDemo from '../../img/JWT-Demo.png';


const JWTAuth = () => {
    return  (
        <div className={"card"}>
            <a href={"https://github.com/ToneDef00/React-JWT-Auth-MySQL-Boilerplate"} >
                <img src={JWTDemo} alt={"Password Authentication Boilerplate"} width={"100%"}/>
                <div className={"words"}>
                    <h5>Authenticated webapp Using Node</h5>
                    <p>A boiler plate which allows for rapid deployment of frontend applications without much work</p>
                    <a href={"https://github.com/ToneDef00/React-JWT-Auth-MySQL-Boilerplate"}><button>Github</button></a>
                </div>
            </a>
        </div>
    );
};

export default JWTAuth;