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
            {/*  <Route exact path='/Counter' component={Counter}/>*/}
            {/*<Route exact path='/auth/success'component={PostAuth}/>*/}
            {/*<Route exact path='/map'component={Fmap}/>*/}
            {/*<Route exact path='/fmap' component={Fmap}/>*/}
        </AppWithNav>
    </Router>
    , document.querySelector('#root'));
