import React from 'react';
import PropTypes from 'prop-types';
import './style.css';



const PortfolioComponent = (props) => {
  return  (
    <div className={"card"}>
        <a href={props.projectURL} >
            <img src={props.imgsrc} alt={props.imgalt} width={"100%"}/>
        </a>
            <div className={"words"}>
                <h5>{props.projectName}</h5>
                <p>{props.porjectText}</p>
                <a href={props.buttonLink}><button className={"pButton"}>{props.buttonTxt}</button></a>
            </div>
    </div>
  );
};
PortfolioComponent.propTypes = {
    projectURL: PropTypes.string.isRequired,
    imgsrc:PropTypes.string.isRequired,
    imgalt:PropTypes.string.isRequired,
    projectName:PropTypes.string.isRequired,
    porjectText: PropTypes.string.isRequired,
    buttonLink:PropTypes.string.isRequired,
    buttonTxt: PropTypes.string.isRequired,
};

export default PortfolioComponent;
