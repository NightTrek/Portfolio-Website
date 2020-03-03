import React, {Component} from 'react';

//import Containers
import TextSlider from '../TextSlider/TextSlider';

//import components
import  WordGuessGame from '../../components/PortfolioItems/wordGuessGame';
import TriviaGame   from '../../components/PortfolioItems/TriviaGame';
import ClimateFeel  from '../../components/PortfolioItems/ClimateFeel';
import JWTAuth from "../../components/PortfolioItems/JWT-Auth-BoilerPlate";
import ContactPage from "../../components/ContactPage/ContactPage";


//import styles
import './style.css';
import Flowerpatch from "../../components/PortfolioItems/flowerpatch";


class HomePage extends Component {

    render() {
        return (
            <div className={"flexColumn"}>
                <div className={"textSlider"} id={"Home"}>
                    <TextSlider/>
                </div>
                <div className={"flexRow"}>
                    <WordGuessGame/>
                    <TriviaGame/>
                    <ClimateFeel/>
                    <JWTAuth/>
                    <Flowerpatch/>
                </div>
                <div className={"contactPage flexRow"}>
                    <h1 className={"contactHeader"}>Lets Talk</h1>
                </div>
                <ContactPage id={"ContactPage"} />
            </div>
        );
    }
}

export default HomePage;
