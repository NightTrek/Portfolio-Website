import React, {Component} from 'react';

//import Containers
import TextSlider from '../TextSlider/TextSlider';
//import components
import  WordGuessGame from '../../components/PortfolioItems/wordGuessGame';
import TriviaGame   from '../../components/PortfolioItems/TriviaGame';
import ClimateFeel  from '../../components/PortfolioItems/ClimateFeel';

//import styles
import './style.css';

class HomePage extends Component {

    render() {
        return (
            <div className={"flexColumn"}>
                <div className={"textSlider"}>
                    <TextSlider/>
                </div>
                <div className={"flexRow"}>
                    <WordGuessGame/>
                    <TriviaGame/>
                    <ClimateFeel/>
                </div>

            </div>
        );
    }
}

export default HomePage;
