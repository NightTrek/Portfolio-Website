import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import Container from './Partials/Container';
import Row from "./Partials/Row";
import Column from "./Partials/Column";
class NavBarHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            sticky:false
        }

    }

render(props) {

    return(
      <Container cflex ={true} >
          <Row class={"bg-info"}>
              <Column large={2} medium={2} small={4}>
                  <h3>Daniel Steigman</h3>
              </Column>
              <Column large={4} medium={4} small={5}>
              </Column>
              <Column large={2} medium={2} small={1}>
                  <button style={{height:"100%",padding:"5px"}}> About Me</button>
              </Column>
              <Column large={2} medium={2} small={1}>
                  <button style={{height:"100%"}}> Projects</button>
              </Column>
              <Column large={2} medium={2} small={1}>
                  <button style={{height:"100%"}}> Dual4T</button>
              </Column>


          </Row>
          {this.props.children}
      </Container>
        );
    }
}


export default NavBarHeader;
// export default NavBarHeader;
