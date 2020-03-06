import React, {Component} from 'react';


//import style
import "../HomePage/style.css";
import "./style.css";

import me from "../../img/IMG_2031.jpg";
import meto from "../../img/Buisness.png";

class AboutMe extends Component {







    render() {
        return (
            <div className={"aboutMePage"}>
                <div className={"flexColumn aboutMeContent"}>
                    <div className={"flexRow"}>
                        <div className={"flexColumn"}>
                            <div className={"aboutHeader"}>
                                <h2 > Hello my name is Daniel. I am a full stack Developer</h2>
                                <h2 >My passion is solving weird problems by making functional art.</h2>
                            </div>

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
                                automation.
                                I quickly realized that small businesses everywhere can benefit from cheap and effective
                                web technology</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;