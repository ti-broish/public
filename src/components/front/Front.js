import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Watchers from './pages/Watchers';
import Videos from './pages/Videos';
import PrivacyNotice from './pages/PrivacyNotice';

import Header from './layout/Header';
import Footer from './layout/Footer';

import styled from 'styled-components';

const FrontDiv = styled.div`
    //background-color: #d4d4d4;
`;

export const Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

export const MainContent = styled.div`
    background-color: white;
    padding: 40px 60px;

    h1 { color: #444; text-align: center; }
    h2 { color: #888; text-align: left; }
    p { color: #333; text-align: justify; }

    ul, ol { color: #333; }

    hr {
        margin: 50px 0;
        border-top: none;
        border-top-color: currentcolor;
        border-color: #ddd;
    }
`;

export const GreenLine = styled.div`
    height: 40px;
    background-color: #38decb;
    width: 100%;
`;

export default props => {
    return(
        <FrontDiv>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/watchers' component={Watchers}/>
                <Route path='/videos' component={Videos}/>
                <Route path='/privacy-notice' component={PrivacyNotice}/>
                <Redirect to='/'/>
            </Switch>
            <Footer/>
        </FrontDiv>
    );
};