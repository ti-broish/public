import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Global from './Global';
import Region from './Region';
import Section from './Section';

import Header from './layout/Header';
import Footer from './layout/Footer';

export default props => {
    return(
        <div>
            <Header/>
            <div className='wrapper' style={{minHeight: 'calc(100vh - 128px)'}}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/section/:section' component={Section}/>
                        <Route path='/region/:region' component={Region}/>
                        <Route exact path='/'  component={Global}/>
                        <Redirect to='/'/>
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>
    );
};