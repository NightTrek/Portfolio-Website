import React, {Component} from 'react';

import "../HomePage/style.css";
import "../AboutMe/style.css";
import "./style.css";

import frontEndIcon from "../../img/coding.png";
import backendIcon  from "../../img/backend.png";
import business from "../../img/Buisness.png";
import lab from "../../img/lab.png";


class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSkills: false,
            skillindex1:0,
        };

        this.showSkills = this.showSkills.bind(this);
        this.backSkill = this.backSkill.bind(this);
        this.nextSkill = this.nextSkill.bind(this);
    }

    showSkills() {
        let cstate = this.state;
        cstate.showSkills = !cstate.showSkills;
        this.setState(cstate);
    }

    nextSkill(){
        let cstate = this.state;
        if(this.state.skillindex1===3){
            cstate.skillindex1=0;
        }
        else{
            cstate.skillindex1++;
        }
        this.setState(cstate);

    }

    backSkill(){
        let cstate = this.state;
        if(this.state.skillindex1===0){
            cstate.skillindex1=3;
        }
        else{
            cstate.skillindex1--;
        }
        this.setState(cstate);
    }


    render() {
        let skillsArray = [
            (
                <div>
                    <div className={"flexColumn skillCatagory"}>
                        <div className={"flexRow"}>
                            <img src={frontEndIcon} alt={"front end dev icon"} className={"skillIcon"}/>
                        </div>
                        <h2 className={"Title "}> Frontend Development</h2>
                        <br/>
                        <div className={"flexRow"}>
                            <div>
                                <h3 className={"high-text"}>
                                    Skill I have
                                </h3>
                                <ul className={"skillList"}>
                                    <li>HTML5</li>
                                    <li>CSS, LESS, SASS</li>
                                    <li>React.js</li>
                                    <li>JQuery</li>
                                    <li>Redux</li>
                                </ul>
                                <h3 className={"high-text"}> Skills I'm learning</h3>
                                <ul className={"skillList"}>
                                    <li>React Native</li>
                                    <li>Figma</li>
                                    <li>Angular</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            ),(
                <div>
                    <div className={"flexColumn skillCatagory"}>
                        <div className={"flexRow"}>
                            <img src={backendIcon} alt={"backend dev icon"} className={"skillIcon"} id={"backendIcon"}/>
                        </div>
                        <div className={"flexRow"}>
                            <h2> Backend Development</h2>
                        </div>

                        <br/>
                        <div className={"flexRow"}>
                            <div>
                                <h3 className={"high-text"}>
                                    Skill I have
                                </h3>
                                <ul className={"skillList"}>
                                    <li>Node.js/Express</li>
                                    <li>Go lang</li>
                                    <li>SQL and MySQL</li>
                                    <li>NoSQL/MongoDB</li>
                                    <li>Google Cloud Compute</li>
                                </ul>
                                <h3 className={"high-text"}> Skills I'm learning</h3>
                                <ul className={"skillList"}>
                                    <li>AWS</li>
                                    <li>Python django</li>
                                    <li>Ruby</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ),(
                <div>
                    <div className={"flexColumn skillCatagory"}>
                        <div className={"flexRow"}>
                            <img src={business} alt={"backend dev icon"} className={"skillIcon"} id={"Business icon"}/>
                        </div>
                        <div className={"flexRow"}>
                            <h2 className={"Title"}> Business Consulting</h2>
                        </div>

                        <br/>
                        <div className={"flexRow"}>
                            <div>
                                <h3 className={"high-text"}>
                                    Skill I have
                                </h3>
                                <ul className={"skillList"}>
                                    <li>CRM Usage and Automation</li>
                                    <li>E Commerce Design</li>
                                    <li>Google Analytics</li>
                                    <li>Custom Software Integration</li>
                                </ul>
                                <h3 className={"high-text"}> Skills I'm learning</h3>
                                <ul className={"skillList"}>
                                    <li>Advanced Data Science</li>
                                    <li>Brand Design</li>
                                    <li>Integral management</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            ),
            (
                    <div>
                        <div className={"flexColumn skillCatagory"}>
                            <div className={"flexRow"}>
                                <img src={lab} alt={"backend dev icon"} className={"skillIcon"} id={"lab icon"}/>
                            </div>
                            <div className={"flexRow"}>
                                <h2 className={"Title"}> Cannabis</h2>
                            </div>
                            <br/>
                            <div className={"flexRow"}>
                                <div>
                                    <h3 className={"high-text"}>
                                        Skill I have
                                    </h3>
                                    <ul className={"skillList"}>
                                        <li>Solvent Extraction</li>
                                        <li>Employee safety</li>
                                        <li>Regulator Compliance</li>
                                        <li>Purification and remediation</li>
                                        <li>Automation technology</li>
                                    </ul>
                                    <h3 className={"high-text"}> Skills I'm learning</h3>
                                    <ul className={"skillList"}>
                                        <li>Chromatography</li>
                                        <li>CO2 Extraction</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                )

        ];

        return (
            <div className={"flexRow skillPage"}>
                {/*<div className={"flexColumn"}>*/}

                    {this.state.showSkills ? (
                        <div className={"flexRow skillsContainer"}>
                            <div className={"greenHalf"}></div>
                            <div className={"skillsBox"}>
                                <div className={"skillsTable"}>
                                    <button onClick={this.backSkill} className={"skillSwitchButtons"} id={"backButton"}>&lt; </button>
                                    {skillsArray[this.state.skillindex1]}
                                    <button onClick={this.nextSkill} className={"skillSwitchButtons"} id={"nextButton"}>&gt;</button>
                                </div>
                            </div>
                            {/*<div className={"flexRow"} id={"hideSkillsButton"}>*/}
                            {/*    /!*<div className={"flexColumn"} >*!/*/}
                            {/*    <div className={"skillsButton flexRow"} onClick={this.showSkills}>*/}
                            {/*        <h3 className={"high-text skillButtonText"}>Hide My Talent </h3>*/}
                            {/*    </div>*/}
                            {/*    /!*</div>*!/*/}
                            {/*</div>*/}
                            <div className={"skillsButton flexRow"} onClick={this.showSkills} id={"hideSkillsButton"}>
                                <h3 className={"high-text skillButtonText"}>Hide My Talent </h3>
                            </div>
                        </div>
                    ) : (<div>
                            <div className={"flexRow MySkills"}>
                                <div className={"flexColumn header-padding-2"}>
                                    <h3 className={"header-padding-2"}>I am proficient in a number of languages and technologies </h3>
                                    <h3 className={"header-padding-2"}>Languages: javascript, Golang, and python are my most used.</h3>
                                </div>
                            </div>
                            <div className={"flexRow"}>
                                <div className={"flexColumn"}>
                                    <div className={"flexRow"}>
                                        <div className={"skillsButton flexRow"} onClick={this.showSkills}>
                                            <h3 className={"high-text skillButtonText"}>learn More About my work and skills </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                {/*</div>*/}
            </div>
        );
    }
}

export default Skills;