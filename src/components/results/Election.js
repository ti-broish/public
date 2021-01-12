import React, { useState, useEffect } from 'react';

import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import axios from 'axios';

import Header from './layout/Header';
import Footer from './layout/Footer';
import LoadingScreen from './layout/LoadingScreen';

import ResultUnit from './ResultUnit.js';
import Global from './units/Global.js';

import { Wrapper } from './Results';

export const ElectionContext = React.createContext();

import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const StyledTooltip = styled(ReactTooltip)`
    background-color: white !important;
    opacity: 1 !important;
    color: black !important;
    border: none;
    padding: 0;
    margin: 0;
`;

export default props => {
    const { election } = useParams();
    const [globalData, setGlobalData] = useState(null);

    useEffect(() => {
        axios.get(`/results/${election}/routeData.json`).then(res => {
            setGlobalData(res.data);
        });
    }, []);

    return(
        <ElectionContext.Provider value={{ election, globalData }}>
            <Header/>
            <Wrapper>
            {
                !globalData? <LoadingScreen/> : [
                    <StyledTooltip 
                        multiline={true} 
                        html={true}
                        border={true}
                        borderColor={'#aaa'}
                        arrowColor={'white'}
                        effect={'solid'}
                        place={'top'}
                        scrollHide={false}
                        backgroundColor={'#fff'}
                        type={"dark"}
                    />,
                    <Switch>
                        <Route path={`/results/${election}/:unit`} component={ResultUnit}/>
                        <Route path={`/results/${election}`} component={Global}/>
                        <Redirect to={`/results/${election}`}/>
                    </Switch>
                ]
            }
            </Wrapper>
            <Footer/>
        </ElectionContext.Provider>
    );
};