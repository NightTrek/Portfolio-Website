import React, {Component} from 'react';


//import style
import "../HomePage/style.css";
import "./style.css";

import me from "../../img/IMG_2031.jpg";


class AboutMe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSkills: true,
        };

        this.showSkills = this.showSkills.bind(this);
    }


    showSkills() {
        let cstate = this.state;
        cstate.showSkills = !cstate.showSkills;
        this.setState(cstate);
    }


    render() {
        return (
            <div className={"aboutMePage"}>
                <div className={"flexColumn aboutMeContent"}>
                    <div className={"flexRow"}>
                        <div className={"flexColumn"}>
                            <h2> Hello my name is Daniel. I am a full stack Developer</h2>
                            <h2>My passion is solving weird problems by making functional art.</h2>
                        </div>
                    </div>
                    <div className={"aboutRow"}>
                        <div className={"aboutContent"}>
                            <img src={me} alt={"its my face"} className={"myface"}/>
                        </div>
                        <div className={"aboutText "}>
                            <h3> I have been working as freelance developer for over a year.
                                In my past life i worked in the chemical engineering field helping small business
                                operate light hydrocarbon extraction equipment.
                                During my time as a business consultant I learned the importance of good branding and
                                automation for small business.
                                I quickly realized that small businesses everywhere can benifit from cheap and effective
                                automation technology</h3>
                        </div>
                    </div>
                    <div className={"aboutRow"}>
                        {/*TODO enter the matrix button that opens a canvas with my skills dropping from the top*/}
                        {this.state.showSkills ? (
                            <div>
                                <div className={"skillsTable"}>
                                    <div className={"flexColumn skillCatagory"}>
                                        <h2> Frontend Development</h2>
                                        <br/>
                                        <h3>
                                            Skill I have
                                        </h3>
                                        <ul>
                                            <li>HTML5</li>
                                            <li>CSS, LESS, SASS</li>
                                            <li>React.js</li>
                                            <li>JQuery</li>
                                            <li>Redux</li>
                                        </ul>
                                        <h3> Skills im learning</h3>
                                        <ul>
                                            <li>React Native</li>
                                            <li>Figma</li>
                                            <li>Angular</li>
                                        </ul>

                                    </div>
                                    <div className={"flexColumn skillCatagory"}>
                                        <h2> Backend Development</h2>
                                        <br/>
                                        <h3>
                                            Skill I have
                                        </h3>
                                        <ul>
                                            <li>Node.js/Express</li>
                                            <li>Go lang</li>
                                            <li>SQL and MySQL</li>
                                            <li>NoSQL/MongoDB</li>
                                            <li>Google Cloud Compute</li>
                                        </ul>
                                        <h3> Skills im learning</h3>
                                        <ul>
                                            <li>AWS</li>
                                            <li>Python django</li>
                                            <li>Ruby</li>
                                        </ul>
                                    </div>
                                    <div className={"flexColumn"}>
                                        <h2> Business Consulting</h2>
                                        <br/>
                                        <h3>
                                            Skill I have
                                        </h3>
                                        <ul>
                                            <li>CRM Usage and Automation</li>
                                            <li>Go lang</li>
                                            <li>SQL and MySQL</li>
                                            <li>NoSQL/MongoDB</li>
                                            <li>Google Cloud Compute</li>
                                        </ul>
                                        <h3> Skills im learning</h3>
                                        <ul>
                                            <li>AWS</li>
                                            <li>Python django</li>
                                            <li>Ruby</li>
                                        </ul>
                                    </div>
                                    <div className={"flexColumn"}>
                                        <h2> Cannabis</h2>
                                    </div>
                                </div>

                                <button onClick={this.showSkills}> Show skills</button>
                            </div>
                        ) : (
                            <div className={""}>
                                <h3>I am proficient in a number of languages and technologies </h3>
                                <h3>Languages: javascript, Golang, and python are my most used.</h3>
                                <button onClick={this.showSkills}> see complete skill list</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;