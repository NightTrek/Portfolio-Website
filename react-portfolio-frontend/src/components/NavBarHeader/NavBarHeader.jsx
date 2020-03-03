import React, {Component} from 'react';
import  './style.css';



class NavBarHeader extends Component {
    render() {
        return (
            <div className={"NavBarContainer"}>
                <div className={"NavBarElement"}>
                    <a href={"#Home"}><h5>Home</h5></a>
                </div>
                <div className={"NavBarElement"}>
                    <a href={"#ContactPage"}><h5>Contact</h5></a>
                </div>
                <div className={"NavBarElement"}>
                    <h5>Blog (coming Soon)</h5>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default NavBarHeader;