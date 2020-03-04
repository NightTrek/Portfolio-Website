import React from 'react';


import "../../containers/HomePage/style.css";
import "./style.css";

import githubLogo from "../../img/GitHub-Mark-120px-plus.png";
import LinkdinLogo from "../../img/LInkdinLogoBlack.png";

const ContactPage = () =>{
        return (
            <div className={"flexRow contactPanel"}>
                <div className={"flexColumn contactPanel"}>
                        <h2>I am actively looking for opportunities! Please feel free to contact me via the links below</h2>
                        <h2>Email me at <span className={"email"}>Daniels@dual4t.com</span> or find me on social media</h2>
                        <div className={"flexRow"}>
                                <div className={"socialMediaButton"}>
                                        <a href={"https://github.com/ToneDef00"}><img src={githubLogo} alt={"github logo"} className={"socialimg"} /></a>
                                </div>
                                <div className={"socialMediaButton"}>
                                        <a href={"https://www.linkedin.com/in/daniel-steigman-bb652186/"}> <img src={LinkdinLogo} alt={"linkdin Logo"} className={"socialimg"}/> </a>
                                </div>
                        </div>
                </div>
            </div>
        );
};


export default ContactPage;