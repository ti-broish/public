import React, { useState, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

const Results = loadable(() => import('./results/Results.js'));
const Post = loadable(() => import('./posts/Post.js'));
const Front = loadable(() => import('./front/Front.js'));

import styled from 'styled-components';

const GlobalCSS = styled.div`
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(/fonts/montserrat/Montserrat-Regular.ttf) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(/fonts/montserrat/Montserrat-Bold.ttf) format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(/fonts/montserrat/Montserrat-Black.ttf) format('woff');
        font-weight: 900;
        font-style: normal;
    }

    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    background-color: white;

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
                <Route path='/results/:election' component={Results}/>
                <Route path='/post/:post' component={Post}/>
                <Route path='/' component={Front}/>
            </Switch>
        </GlobalCSS>
    );
};