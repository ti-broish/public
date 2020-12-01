import React, { useState, useEffect } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Global from './Global';
import Region from './Region';
import Admunit from './Admunit';
import District from './District';
import Section from './Section';

import Header from './layout/Header';
import Footer from './layout/Footer';

import LoadingScreen from './layout/LoadingScreen';

export default props => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/data/global.json').then(res => {
            setData(res.data);
            console.log(res.data);
        });
    }, []);

    return(
        <BrowserRouter>
            <Header/>
            <div className='wrapper' style={{minHeight: 'calc(100vh - 128px)', padding: '50px 0'}}>
            {
                !data? <LoadingScreen/> :          
                    <Switch>
                        <Route path='/section/:section' render={()=><Section globalData={data}/>}/>
                        <Route path='/district/:district' render={()=><District globalData={data}/>}/>
                        <Route path='/admunit/:admunit' render={()=><Admunit globalData={data}/>}/>
                        <Route path='/region/:region' render={()=><Region globalData={data}/>}/>
                        <Route exact path='/'  render={()=><Global globalData={data}/>}/>
                        <Redirect to='/'/>
                    </Switch>
            }
            </div>
            <Footer/>
        </BrowserRouter>
    );
};