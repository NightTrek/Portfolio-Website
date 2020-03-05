import React, {Component} from 'react';

import "../HomePage/style.css";
import "../AboutMe/style.css";
import "./style.css";

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSkills: true,
            skillArrayIndex:0,
            skillindex1:0,
            skillindex2:1
        };

        this.showSkills = this.showSkills.bind(this);
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
        if(this.state.skillindex2===3){
            cstate.skillindex2=0;
        }
        else{
            cstate.skillindex2++;
        }
        this.setState(cstate);

    }


    render() {
        let skillsArray = [
            (
                <div>
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
                        <h3> Skills I'm learning</h3>
                        <ul>
                            <li>React Native</li>
                            <li>Figma</li>
                            <li>Angular</li>
                        </ul>

                    </div>
                </div>
            ),(
                <div>
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
                        <h3> Skills I'm learning</h3>
                        <ul>
                            <li>AWS</li>
                            <li>Python django</li>
                            <li>Ruby</li>
                        </ul>
                    </div>
                </div>
            ),(
                <div>
                    <div className={"flexColumn skillCatagory"}>
                        <h2> Business Consulting</h2>
                        <br/>
                        <h3>
                            Skill I have
                        </h3>
                        <ul>
                            <li>CRM Usage and Automation</li>
                            <li>E Commerce Design</li>
                            <li>Google Analytics</li>
                            <li>Custom Software Integration</li>
                        </ul>
                        <h3> Skills I'm learning</h3>
                        <ul>
                            <li>Advanced Data Science</li>
                            <li>Brand Design</li>
                            <li>Integral management</li>
                        </ul>
                    </div>
                </div>
            ),
            (
                    <div>
                        <div className={"flexColumn skillCatagory"}>
                            <h2> Cannabis</h2>
                            <br/>
                            <h3>
                                Skill I have
                            </h3>
                            <ul>
                                <li>Solvent Extraction</li>
                                <li>Employee safety</li>
                                <li>Regulator Compliance</li>
                                <li>Purification and remediation</li>
                                <li>Automation technology</li>
                            </ul>
                            <h3> Skills I'm learning</h3>
                            <ul>
                                <li>Chromatography</li>
                                <li>CO2 Extraction</li>
                            </ul>
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
                                    {skillsArray[this.state.skillindex1]}
                                    {skillsArray[this.state.skillindex2]}
                                </div>

                                <button onClick={this.showSkills}> Show skills</button>
                                <button onClick={this.nextSkill}>Next</button>
                            </div>
                        </div>
                    ) : (
                        <div className={"flexRow MySkills"}>
                            <div className={"flexColumn"}>
                                <h3>I am proficient in a number of languages and technologies </h3>
                                <h3>Languages: javascript, Golang, and python are my most used.</h3>
                                <button onClick={this.showSkills}> see complete skill list</button>
                            </div>
                        </div>
                    )}
                {/*</div>*/}
            </div>
        );
    }
}

export default Skills;