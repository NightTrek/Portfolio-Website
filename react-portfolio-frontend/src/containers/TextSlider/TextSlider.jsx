import React, {Component} from 'react';
import "./style.css";

const textArray = [
    "Helping teams innovate",
    "Save money with automation",
    "Fast technology solutions for business",
    "Bringing seamless web technology to everyone",
    "Full stack web development"
];

class TextSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textNumber:textArray.length-1
        };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textNumber;
            if(currentIdx === textArray.length-1){
                currentIdx =0;
            }
            this.setState({ textNumber: currentIdx + 1 });
        }, 3000);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        return (
            <div>
                <h1 className={"sliderText"}>{textArray[this.state.textNumber]}</h1>
            </div>
             );
    }
}

export default TextSlider;