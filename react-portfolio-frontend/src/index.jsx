import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';


//importing components
import AppWithNav from "./components/AppWithNav";
import HomePage from "./containers/HomePage/HomePage";


ReactDOM.render("", document.getElementById('root'));


ReactDOM.render(
    <Router>
        <AppWithNav>
            <Route exact path='/' component={HomePage}/>
        </AppWithNav>
    </Router>
    , document.querySelector('#root'));
