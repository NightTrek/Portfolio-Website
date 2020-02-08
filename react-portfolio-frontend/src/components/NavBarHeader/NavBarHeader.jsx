import React, {Component} from 'react';
import  './style.css';



class NavBarHeader extends Component {
    render() {
        return (
            <div className={"NavBarContainer"}>
                <div className={"NavBarElement"}>
                    <h5>Home</h5>
                </div>
                <div className={"NavBarElement"}>
                    <h5>Contact</h5>
                </div>
                <div className={"NavBarElement"}>
                    <h5>Blog</h5>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default NavBarHeader;