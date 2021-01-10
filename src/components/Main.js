import React, { useState, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

const Results = loadable(() => import('./results/Results.js'));
const Post = loadable(() => import('./posts/Post.js'));
const Front = loadable(() => import('./front/Front.js'));

import styled from 'styled-components';

const GlobalCSS = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    background-color: white;

    button {
        font-family: 'Montserrat', sans-serif;
    }

    а, a:active, a:focus, a:visited { 
        outline: none; 
        -moz-outline-style: none;
    }
`;

export const Wrapper = styled.div`
    width: 900px;
    margin: 0 auto;
`;

export default props => {
    return(
        <GlobalCSS>
            <Switch>
                <Route path='/results' component={Results}/>
                <Route path='/post/:post' component={Post}/>
                <Route path='/' component={Front}/>
            </Switch>
        </GlobalCSS>
    );
};