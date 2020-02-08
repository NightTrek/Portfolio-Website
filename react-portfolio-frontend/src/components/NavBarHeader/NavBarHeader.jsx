import React, {Component} from 'react';
import  './style.css';



class NavBarHeader extends Component {
    render() {
        return (
            <div className={"NavBarContainer"}>
                <div className={"NavBarElement"}>
                    <h3>About</h3>
                </div>
                <div className={"NavBarElement"}>
                    <h3>Contact</h3>
                </div>
                <div className={"NavBarElement"}>
                    <h3>Blog</h3>
                </div>
                <div >

                </div>
            </div>
        );
    }
}

export default NavBarHeader;