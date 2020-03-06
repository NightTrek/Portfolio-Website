import React, {Component} from 'react';

//import Containers
import TextSlider from '../TextSlider/TextSlider';

//import components";
import ContactPage from "../../components/ContactPage/ContactPage";


//import styles
import './style.css';
import PortfolioComponent from "../../components/PortfolioItems/PortfolioComponent";

//import images
import bsPortfolio from "../../img/BSPortfolio.png";
import FlowerPatch from "../../img/FlowerpatchHome.png";
import WordGuessGame from "../../img/wordGuessGame2.png";
import ClimateFeel from "../../img/ClimateFeel.png";
import TriviaGame from "../../img/TriviaGame1.png";
import JWTIMG from "../../img/JWT-Demo.png";
import Gallery from "../imageGallery/ImageGallery";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
class HomePage extends Component {

    render() {
        return (
            <div className={"flexColumn"}>
                <div className={"textSlider"} id={"Home"}>
                    <TextSlider/>
                </div>
                <div className={"flexRow portfolio"}>
                    <PortfolioComponent projectURL={"https://flowerpatch.app/"} imgsrc={FlowerPatch} imgalt={"FlowerPatch Game"}
                                        projectName={"FlowerPatch"} porjectText={"Flowerpatch is a peaceful Ethereum indie game about farming cannabis."}
                                        buttonLink={"https://flowerpatch.app/game"} buttonTxt={"Try it now"}/>
                    <PortfolioComponent projectURL={"https://tonedef00.github.io/Word-guess-game/"} imgsrc={WordGuessGame} imgalt={"Word guess game"}
                                        projectName={"Word Guess Game"} porjectText={"My first JS project. A simple vanilla javascript game where the goal is to guess the word"}
                                        buttonLink={"https://github.com/ToneDef00/Word-guess-game"} buttonTxt={"Github"}/>
                    <PortfolioComponent projectURL={"https://tonedef00.github.io/Climate-Feel-App/"} imgsrc={ClimateFeel} imgalt={"Climate Feel"}
                                        projectName={"Climate Feel"} porjectText={"A website showing you real weather data over the past 20 years"}
                                        buttonLink={"https://github.com/ToneDef00/Climate-Feel-App"} buttonTxt={"Github"}/>
                    <PortfolioComponent projectURL={"https://tonedef00.github.io/trivia-game/"} imgsrc={TriviaGame} imgalt={"Trivia Game"}
                                        projectName={"Trivia Game"} porjectText={"A timed Trivia Game using JQuery and a Trivia API"}
                                        buttonLink={"https://github.com/ToneDef00/trivia-game"} buttonTxt={"Github"}/>
                    <PortfolioComponent projectURL={"https://github.com/ToneDef00/React-JWT-Auth-MySQL-Boilerplate"} imgsrc={JWTIMG} imgalt={"Authentication App"}
                                        projectName={"React-Redux Authentication"} porjectText={"A boiler plate which allows for rapid deployment of frontend applications which require authentication"}
                                        buttonLink={"https://github.com/ToneDef00/React-JWT-Auth-MySQL-Boilerplate"} buttonTxt={"Github"}/>
                    <PortfolioComponent projectURL={"https://tonedef00.github.io/bootstrap-portfolio/"} imgsrc={bsPortfolio}
                                        imgalt={"bootstrap Porfolio"} projectName={"Bootstrap portfolio"} porjectText={"A basic Portfolio HTML page built using bootstrap. The second portfolio built I ever built"}
                                        buttonLink={"https://github.com/ToneDef00/bootstrap-portfolio"} buttonTxt={"Github"}/>
                </div>
                <AboutMe/>
                <Skills/>
                <div>
                    <Gallery/>
                </div>
                <div className={"contactPage flexRow"} id={"ContactPage"}>
                    <h1 className={"contactHeader"}>Lets Talk</h1>
                </div>
                <ContactPage/>
            </div>
        );
    }
}

export default HomePage;
