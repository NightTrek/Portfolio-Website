import React, {Component} from 'react';

const textArray = [
    "Teaching teams to innovate",
    "Automation solutions for small businesses",
    "fast technology solutions for business",
    "Full stack web developer"
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
            < div >
                <h1>{textArray[this.state.textNumber]}</h1>
            </div>
             );
    }
}

export default TextSlider;