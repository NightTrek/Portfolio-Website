import React from 'react';


import "../../containers/HomePage/style.css";
import "./style.css";


const ContactPage = () =>{
        return (
            <div className={"flexRow"}>
                <div className={"flexColumn contactPanel"}>
                        <h2>I am actively looking for opportunities! Please feel free to contact me via the links below</h2>
                        <h2>Email me at <span className={"email"}>Daniels@dual4t.com</span> or find me on social media</h2>
                        <a href={"https://github.com/ToneDef00"}><h2> Check out my Github </h2></a>
                        <a href={"https://www.linkedin.com/in/daniel-steigman-bb652186/"}><h2> Connect with me on Linkdin </h2></a>
                </div>
            </div>
        );
};


export default ContactPage;