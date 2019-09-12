import React, {Component} from 'react';

//import partial components

import Container from "../components/Partials/Container";
import Row from "../components/Partials/Row";
import Column from "../components/Partials/Column";

class Welcome extends Component {

    render() {
        return (
            <div>
                <Container cflex={true}>
                    <Row>
                        <Column large={12} small={12} >
                            <h1> Daniel Steigman</h1>
                            <h5>A passionate Product Designer</h5>
                        </Column>
                    </Row>
                    <Row class={"bg-danger"} >
                        <Column large={6} small={12}>
                            <h5>Executive summery</h5>
                            <hr/>
                            <p>Some things can only be taught though experience. I started my career in a fast paced startup environment,
                                working as customer facing technical support technician. The Company i worked for was building
                                Chemical extraction system using propane and butane as the solvent. I thrived taking on many roles including,
                                product design and marketing their product. During we also launched two successful offshoot businesses which... </p>
                        </Column>
                        <Column large={6} small={12}>
                            <h5>Professional Skills</h5>
                            <ul>
                                <li>Project Management</li>
                                <li>Computer Programing</li>
                                <li>Product Design</li>
                                <li>Manufacturing</li>
                                <li>Marketing Strategy</li>
                            </ul>
                        </Column>
                    </Row>
                    <Row>
                        <img src={"placeholder"}/>
                        <hr/>
                    </Row>
                    <Row>
                    {/*    project  page here*/}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Welcome;
