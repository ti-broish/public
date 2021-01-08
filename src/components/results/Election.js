import React, { useState, useEffect } from 'react';

import { Redirect, Route, Switch, useParams, Link } from 'react-router-dom';
import axios from 'axios';
/*

import Global from './subdivisions/Global';
import Region from './subdivisions/Region';
import Admunit from './subdivisions/Admunit';
import District from './subdivisions/District';
import Section from './subdivisions/Section';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

*/

import LoadingScreen from '../layout/LoadingScreen';

import ResultUnit from './ResultUnit.js';
import Global from './units/Global.js';

export const ElectionContext = React.createContext();

export default props => {
    const { election } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`/results/${election}/routeData.json`).then(res => {
            //setData(res.data);
            console.log(res.data);
        });
    }, []);

    return(
        <ElectionContext.Provider value={{ data }}>
            <h1>Резултати от конкретни избори</h1>
            <Link to='/results/parliament2017/01'>Избирателен район 00</Link>
            <Link to='/results/parliament2017/0101'>Адм. единица 0101</Link>
            <Link to='/results/parliament2017/010101'>Градски район 010101</Link>
            <Link to='/results/parliament2017/010101001'>Секция 010101001</Link>

            {
                !data? <LoadingScreen/> :
                <Switch>
                    <Route path={`/results/${params.election}/:unit`} component={ResultUnit}/>
                    <Route path={`/results/${params.election}`} component={Global}/>
                    <Redirect to={`/results/${params.election}`}/>
                </Switch>
            }

            
            {/*
            <Header/>
            <div className='wrapper' style={{minHeight: 'calc(100vh - 128px)', padding: '30px 0'}}>
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
        <Footer/>*/}
        </ElectionContext.Provider>
    );
};